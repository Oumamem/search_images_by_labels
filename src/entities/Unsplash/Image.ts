import { User } from "./User";

export interface Image {
	id: string;
	created_at: string;
	updated_at: string;
	promoted_at: string | null;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string | null;
	alt_description: string | null;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s3: string;
	};
	links: {
		self: string;
		html: string;
		download: string;
		download_location: string;
	};
	likes: number;
	liked_by_user: boolean;
	current_user_collections: string[];
	sponsorship: string | null;
	topic_submissions: {};
	user: User;
	tags: [[Object], [Object], [Object]];
}
