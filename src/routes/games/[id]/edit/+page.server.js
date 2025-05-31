import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const game = await db.getGame(params.id);
    const platforms = await db.getPlatforms();

    return {
        game,
        platforms
    };
}

export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();

        const game = {
            title: data.get("title"),
            genre: data.get("genre"),
            platform: data.get("platform"),
            rating: parseFloat(data.get("rating")),
            played: data.get("played") === "on",
            comments: data.get("comments"),
            image: data.get("image")
        };

        console.log("Updating game:", game);

        await db.updateGame({ ...game, _id: params.id });

        // Correct SvelteKit redirect:
        throw redirect(303, `/games/${params.id}`);
    }
};
