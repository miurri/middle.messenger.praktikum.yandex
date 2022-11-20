import { ICONS } from "~/src/constants";
import { ActionsMenuItem } from "./actions-menu.types";

export const getItems = (active: "chats" | "settings"): ActionsMenuItem[] => {
	const isActiveChats = active === "chats";

	return [
		{
			alt: "chats",
			icon: isActiveChats ? ICONS.CHATS_ACTIVE : ICONS.CHATS,
			link: "/chats",
			isActive: isActiveChats,
		},
		{
			alt: "settings",
			icon: !isActiveChats ? ICONS.SETTINGS_ACTIVE : ICONS.SETTINGS,
			link: "/settings",
			isActive: !isActiveChats,
		},
		{
			alt: "logout",
			icon: ICONS.LOGOUT,
			link: "/logout",
		},
	];
};
