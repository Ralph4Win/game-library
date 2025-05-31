import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        const platform = {
            name: data.get("name"),
            manufacturer: data.get("manufacturer"),
            logo: "/images/placeholder.jpg"
        };

        await db.createPlatform(platform);

        return {
            success: true,
            redirect: "/platforms"
        };
    }
};
