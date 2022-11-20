import { FormDataProps } from "~/src/organisms";

export const formData: FormDataProps = {
	fields: [
		{
			name: "first_name",
			label: "First name",
			type: "text",
			placeholder: "Enter your first name",
		},
		{
			name: "second_name",
			label: "Second name",
			type: "text",
			placeholder: "Enter your second name",
		},
		{
			name: "login",
			label: "Login",
			type: "text",
			placeholder: "Enter your login",
		},
		{
			name: "phone",
			label: "Phone",
			type: "text",
			placeholder: "Enter your phone",
		},
		{
			name: "email",
			label: "Email",
			type: "text",
			placeholder: "Enter your email",
		},
		{
			name: "password",
			label: "Password",
			type: "password",
			placeholder: "Enter your password",
		},
	],

	buttons: [
		{
			type: "submit",
			modifier: "primary",
			text: "Sign Up",
		},
	],
};
