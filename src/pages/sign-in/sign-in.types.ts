import { FormDataProps } from "~/src/organisms";

export type SignInForm = {
	login: string;
	password: string;
};

export type SignInPageProps = {
	formData: FormDataProps;
};

export type SignInPageState = {
	validate: (values: SignInForm) => Partial<SignInForm>;
	formSubmit: (values: SignInForm) => void;
};
