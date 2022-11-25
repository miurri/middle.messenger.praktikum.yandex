import { FormDataProps } from "~/src/organisms";

export const formData: FormDataProps = {
	fields: [
		{
			name: "oldPassword",
			label: "Old password",
			type: "password",
			placeholder: "Enter your current password",
		},
		{
			name: "newPassword",
			label: "New password",
			type: "password",
			placeholder: "Enter your new password",
		},
	],

	buttons: [
		{
			type: "submit",
			modifier: "primary",
			text: "Change",
		},
	],
};
