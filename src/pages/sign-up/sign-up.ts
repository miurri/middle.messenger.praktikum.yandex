import { Block } from "~/src/core";
import {
	validateEmailField,
	validateFirstNameField,
	validateLoginField,
	validatePasswordField,
	validatePhoneField,
	validateSecondNameField,
} from "~/src/utils";
import { SignUpForm, SignUpPageProps, SignUpPageState } from "./sign-up.types";
import { formData } from "./sign-up.constants";
import template from "bundle-text:./sign-up.hbs";

export class SignUpPage extends Block<SignUpPageProps, SignUpPageState> {
	constructor() {
		super({ formData });
	}

	protected getStateFromProps() {
		this.state = {
			validate: (values: SignUpForm) => {
				const errors: Partial<SignUpForm> = {};

				errors.first_name = validateFirstNameField(values.first_name);
				errors.second_name = validateSecondNameField(
					values.second_name
				);
				errors.login = validateLoginField(values.login);
				errors.email = validateEmailField(values.email);
				errors.phone = validatePhoneField(values.phone);
				errors.password = validatePasswordField(values.password);

				return errors;
			},
			formSubmit: (values: SignUpForm) => {
				console.log(values);
			},
		};
	}

	protected render(): string {
		return template;
	}
}
