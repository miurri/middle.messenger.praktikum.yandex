import { ImageInputProps } from "~/src/atoms";
import { FormDataProps } from "~/src/organisms";

export type UserForm = {
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	phone: string;
	email: string;
};

export type UserSettingsProps = {
	formData: FormDataProps;
};

export type UserSettingsState = {
	changeAvatar: ImageInputProps;
	avatarIcon: string;
	validate: (values: UserForm) => Partial<UserForm>;
	formSubmit: (values: UserForm) => void;
};
