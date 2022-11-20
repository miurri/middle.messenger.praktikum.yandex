import { Block, registerComponent } from "~/src/core";
import { PasswordSettings } from "./password";
import { SettingsState } from "./settings.types";
import { UserSettings } from "./user";
import { settingsList, getActiveInfo } from "./settings.constants";
import template from "bundle-text:./settings.hbs";

export class SettingsPage extends Block<{}, SettingsState> {
	constructor() {
		registerComponent(UserSettings);
		registerComponent(PasswordSettings);
		super();
	}

	protected getStateFromProps() {
		this.state = {
			...getActiveInfo(),
			settingsList,
			handleSettingClick: (event) => {
				const li = (event.target as HTMLElement)?.closest(
					".sidebar-list-item"
				) as HTMLLIElement | undefined;
				const settingId = li?.dataset.id;

				if (settingId) {
					const nextState = {
						...this.state,
						...getActiveInfo(settingId),
					};

					this.setState(nextState);
				}
			},
		};
	}

	protected render(): string {
		return template;
	}
}
