

/**
 * @param {string} keyword
 * @param {number} page
 * @returns {Promise<{url: string, alt: string, id: string, createdAt: string, likes: number, description: string, user: {id: string, username: string}, color: string}[]>}
 */
const fetchImages = async (keyword, page = 1) => {
    const config = useRuntimeConfig()
    const ACCESS_KEY = config.public.UNSPLASH_ACCESS_KEY
    const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(keyword)}&client_id=${ACCESS_KEY}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results.map(image => ({
            url: image.urls.small,
            alt: image.alt_description || 'Unsplash Image',
            id: image.id,
            createdAt: image.created_at,
            likes: image.likes,
            description: image.description || 'No description available',
            user: {
                id: image.user.id,
                username: image.user.username
            },
            color: image.color,
            tags: image.tags,
            download: image.links.download
        }));
    } catch (error) {
        console.error("Failed to fetch images:", error);
        return [];
    }
};

export { fetchImages };
