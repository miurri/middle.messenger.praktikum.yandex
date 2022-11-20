import { Block, registerComponent } from "~/src/core";
import { UserSettings } from "./user";
import { PasswordSettings } from "./password";
import { settingsList, getActiveInfo } from "./settings.constants";
import template from "bundle-text:./settings.hbs";

export class SettingsPage extends Block<{}> {
	constructor() {
		registerComponent(UserSettings);
		registerComponent(PasswordSettings);
		super();
	}

	protected getStateFromProps() {
		this.state = {
			...getActiveInfo(),
			settingsList,
			onSettingClick: (event: Event) => {
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
