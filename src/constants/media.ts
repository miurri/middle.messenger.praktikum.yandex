import logo from "~/static/logo.svg";
import backIcon from "~/static/icons/left-arrow.svg";
import chatsActiveIcon from "~/static/icons/chats-active.svg";
import chatsIcon from "~/static/icons/chats.svg";
import logoutIcon from "~/static/icons/logout.svg";
import settingsActiveIcon from "~/static/icons/settings-active.svg";
import settingsIcon from "~/static/icons/settings.svg";
import sendActiveIcon from "~/static/icons/send-active.svg";
import sendIcon from "~/static/icons/send.svg";
import userIcon from "~/static/icons/user.svg";
import lockIcon from "~/static/icons/lock.svg";
import avatarIcon from "~/static/icons/avatar.svg";
import pageNotFound from "~/static/error-404.svg";
import internalServerError from "~/static/error-500.svg";

export const ICONS = {
	AVATAR: avatarIcon,
	BACK: backIcon,
	CHATS: chatsIcon,
	CHATS_ACTIVE: chatsActiveIcon,
	LOCK: lockIcon,
	LOGOUT: logoutIcon,
	SEND: sendIcon,
	SEND_ACTIVE: sendActiveIcon,
	SETTINGS: settingsIcon,
	SETTINGS_ACTIVE: settingsActiveIcon,
	USER: userIcon,
};

export const LOGO_IMG = logo;

export const STATUS_IMAGES = {
	INTERNAL_SERVER_ERROR: internalServerError,
	PAGE_NOT_FOUND: pageNotFound,
};
