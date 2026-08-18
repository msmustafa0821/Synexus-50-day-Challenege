export function debounce(func, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
export async function fetchWithRetry(
    url,
    options = {},
    retries = 3,
    backoff = 500
) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);

            // Don't retry 400-level errors
            if (response.status >= 400 && response.status < 500) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            // Retry server errors
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            return response;

        } catch (error) {
            // Last attempt → give up
            if (i === retries - 1) {
                throw error;
            }

            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, backoff));

            // Exponential backoff
            backoff *= 2;
        }
    }
}