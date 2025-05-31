import db from "$lib/db.js";

export const load = async () => {
    const games = await db.getGames();
    const platforms = await db.getPlatforms();
    return { games, platforms };
};
