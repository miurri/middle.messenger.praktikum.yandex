import { SettingListItem } from "~/src/organisms";

export type SettingsState = {
	activeId: string;
	settingsList: SettingListItem[];
	handleSettingClick: (event: Event) => void;
	isPassword: boolean;
	headerTitle: string;
};
