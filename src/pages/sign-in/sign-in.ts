import { Block } from "~/src/core";
import { validateLoginField, validatePasswordField } from "~/src/utils";
import { SignInForm, SignInPageProps, SignInPageState } from "./sign-in.types";
import { formData } from "./sign-in.constants";
import template from "bundle-text:./sign-in.hbs";

export class SignInPage extends Block<SignInPageProps, SignInPageState> {
	constructor() {
		super({ formData });
	}

	protected getStateFromProps() {
		this.state = {
			validate: (values: SignInForm) => {
				const errors: Partial<SignInForm> = {};

				errors.login = validateLoginField(values.login);
				errors.password = validatePasswordField(values.password);

				return errors;
			},
			formSubmit: (values: SignInForm) => {
				console.log(values);
			},
		};
	}

	protected render(): string {
		return template;
	}
}
