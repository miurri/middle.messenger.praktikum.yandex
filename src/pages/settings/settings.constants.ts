import { ICONS } from "~/src/constants";
import { SettingListItem } from "~/src/organisms";

export const settingsList: SettingListItem[] = [
	{
		id: "user-settings",
		label: "User settings",
		icon: ICONS.USER,
	},
	{
		id: "password-settings",
		label: "Password settings",
		icon: ICONS.LOCK,
	},
];

export const getActiveInfo = (settingId?: string) => {
	switch (settingId) {
		case "password-settings": {
			return {
				activeId: settingId,
				isPassword: true,
				headerTitle: settingsList[1].label,
			};
		}
		default: {
			return {
				activeId: settingId || settingsList[0].id,
				isPassword: false,
				headerTitle: settingsList[0].label,
			};
		}
	}
};
