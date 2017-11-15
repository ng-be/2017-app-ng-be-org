export interface Speaker {
	name: string;
	firstName: string;
	title: string;
	description: string;
	picture: string;
	contact: {
		twitter: string;
		website: {
			url: string;
			title: string;
		};
	};
}
