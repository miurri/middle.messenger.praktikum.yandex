import { SettingListItem } from "~/src/organisms";

export type SettingsState = {
	activeId: string;
	settingsList: SettingListItem[];
	onSettingClick: (event: Event) => void;
	isPassword: boolean;
	headerTitle: string;
};
