import { FormDataProps } from "~/src/organisms";

export const formData: FormDataProps = {
	fields: [
		{
			name: "login",
			label: "Login",
			type: "text",
			placeholder: "Enter your login",
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
			text: "Sign In",
		},
		{
			type: "button",
			modifier: "link",
			text: "Sing Up",
			onClick: () => {
				document.location.href = "/sign-up";
			},
		},
	],
};
