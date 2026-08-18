import { fetchWithRetry } from "./utils.js";

export const userCache = new Map();

export async function updateInitiative(id) {
    try {
        const response = await fetchWithRetry(
            "https://jsonplaceholder.typicode.com/posts/" + id,
            {
                method: "PUT",

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },

                body: JSON.stringify({
                    id: id,
                    title: "Synexus Initiative [UPDATED]",
                    body: "This initiative has been updated.",
                    userId: 1
                })
            }
        );

        const data = await response.json();

        console.log("Updated Proposal:", data);

    } catch (error) {
        console.error("Update Error:", error);
    }
}

export async function deleteInitiative(id) {
    try {
        const response = await fetchWithRetry(
            "https://jsonplaceholder.typicode.com/posts/" + id,
            {
                method: "DELETE"
            }
        );

        console.log("Delete successful:", response.status);

    } catch (error) {
        console.error("Delete Error:", error);
    }
}