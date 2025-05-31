import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }) => {
    const game = await db.getGame(params.id);

    if (!game) {
        throw redirect(302, "/games"); // if not found, go back to games
    }

    return { game };
};

export const actions = {
    delete: async ({ params }) => {
        await db.deleteGame(params.id);

        return {
            success: true,
            redirect: "/games"
        };
    }
};
