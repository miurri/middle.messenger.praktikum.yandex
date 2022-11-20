import { Block } from "~/src/core";
import { validatePasswordField } from "~/src/utils";
import {
	PasswordForm,
	PasswordSettingsProps,
	PasswordSettingsState,
} from "./settings-password.types";
import { formData } from "./settings-password.constants";
import template from "bundle-text:./settings-password.hbs";

export class PasswordSettings extends Block<
	PasswordSettingsProps,
	PasswordSettingsState
> {
	constructor() {
		super({ formData });
	}

	protected getStateFromProps() {
		this.state = {
			validate: (values: PasswordForm) => {
				const errors: Partial<PasswordForm> = {};

				errors.oldPassword = validatePasswordField(values.oldPassword);
				errors.newPassword = validatePasswordField(values.newPassword);

				return errors;
			},
			formSubmit: (values: PasswordForm) => {
				console.log(values);
			},
		};
	}

	protected render(): string {
		return template;
	}
}
