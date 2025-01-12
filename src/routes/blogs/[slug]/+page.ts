import BlogsData from '$lib/data/blogs';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = BlogsData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
