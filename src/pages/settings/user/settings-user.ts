import { Block } from "~/src/core";
import { ICONS } from "~/src/constants";
import {
	validateEmailField,
	validateFirstNameField,
	validateLoginField,
	validatePhoneField,
	validateSecondNameField,
} from "~/src/utils";
import {
	UserForm,
	UserSettingsProps,
	UserSettingsState,
} from "./settings-user.types";
import { formData } from "./settings-user.constants";
import template from "bundle-text:./settings-user.hbs";

export class UserSettings extends Block<UserSettingsProps, UserSettingsState> {
	constructor() {
		super({ formData });
	}

	protected getStateFromProps() {
		this.state = {
			changeAvatar: {
				name: "avatar",
				label: "Change photo",
				onChange: (event: Event) => {
					console.log(event);
				},
			},
			avatarIcon: ICONS.AVATAR,
			validate: (values: UserForm) => {
				const errors: Partial<UserForm> = {};

				errors.first_name = validateFirstNameField(values.first_name);
				errors.second_name = validateSecondNameField(
					values.second_name
				);
				errors.login = validateLoginField(values.login);
				errors.phone = validatePhoneField(values.phone);
				errors.email = validateEmailField(values.email);

				return errors;
			},
			formSubmit: (values: UserForm) => {
				console.log(values);
			},
		};
	}

	protected render(): string {
		return template;
	}
}
