import { FormDataProps } from "~/src/organisms";

export type PasswordForm = {
	oldPassword: string;
	newPassword: string;
};

export type PasswordSettingsProps = {
	formData: FormDataProps;
};

export type PasswordSettingsState = {
	validate: (values: PasswordForm) => Partial<PasswordForm>;
	formSubmit: (values: PasswordForm) => void;
};
