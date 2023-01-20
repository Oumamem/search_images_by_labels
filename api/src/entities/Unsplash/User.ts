export interface User {
	id: string;
	updated_at: string;
	username: string;
	name: string;
	first_name: string;
	last_name: string;
	twitter_username: string | null;
	portfolio_url: string | null;
	bio: string | null;
	location: string | null;
	links: string[];
	profile_image: string[];
	instagram_username: null;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	accepted_tos: boolean;
	for_hire: boolean;
	social: string[];
}
