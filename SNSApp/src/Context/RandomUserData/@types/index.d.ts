interface IUserProfile {
	name: string;
	photo: string;
}

interface Feed extends IUserProfile {
	images: Array<string>;
	description: string;
}