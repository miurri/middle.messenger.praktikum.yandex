import { FormDataProps } from "~/src/organisms";

export const formData: FormDataProps = {
	fields: [
		{
			name: "first_name",
			label: "First name",
			type: "text",
			placeholder: "Enter your first name",
			value: "Anna",
		},
		{
			name: "second_name",
			label: "Second name",
			type: "text",
			placeholder: "Enter your second name",
			value: "Lysenko",
		},
		{
			name: "display_name",
			label: "Display name",
			type: "text",
			placeholder: "Enter your display name",
			value: "Anna Lysenko~",
		},
		{
			name: "login",
			label: "Login",
			type: "text",
			placeholder: "Enter your login",
			value: "Miurri",
		},
		{
			name: "phone",
			label: "Phone",
			type: "text",
			placeholder: "Enter your phone",
			value: "89999999999",
		},
		{
			name: "email",
			label: "Email",
			type: "text",
			placeholder: "Enter your email",
			value: "my-email@gmail.com",
		},
	],

	buttons: [
		{
			type: "submit",
			modifier: "primary",
			text: "Save",
		},
	],
};
