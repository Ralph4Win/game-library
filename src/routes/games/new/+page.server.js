import db from "$lib/db.js";

export const load = async () => {
    const platforms = await db.getPlatforms();
    return { platforms };
};

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const game = {
            title: data.get("title"),
            genre: data.get("genre"),
            platform: data.get("platform"),
            rating: parseFloat(data.get("rating")),
            played: data.get("played") === "on",
            comments: data.get("comments"),
            image: data.get("image") || "/images/placeholder.jpg"
        };

        await db.createGame(game);

        // Redirect after saving:
        return {
            success: true,
            redirect: "/games"
        };
    }
};
