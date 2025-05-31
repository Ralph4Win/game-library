import db from "$lib/db.js";

export const load = async () => {
    const platforms = await db.getPlatforms();
    return { platforms };
};

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");

        if (id) {
            await db.deletePlatform(id);
        }

        return {
            success: true
        };
    }
};
