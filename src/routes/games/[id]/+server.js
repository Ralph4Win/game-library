import db from "$lib/db.js";

export const DELETE = async ({ params }) => {
    const id = params.id;
    const result = await db.deleteGame(id);

    if (result) {
        return new Response(null, { status: 200 });
    } else {
        return new Response("Failed to delete game", { status: 500 });
    }
};
