import { FormDataProps } from "~/src/organisms";

export type SignUpForm = {
	first_name: string;
	second_name: string;
	login: string;
	phone: string;
	email: string;
	password: string;
};

export type SignUpPageProps = {
	formData: FormDataProps;
};

export type SignUpPageState = {
	validate: (values: SignUpForm) => Partial<SignUpForm>;
	formSubmit: (values: SignUpForm) => void;
};
