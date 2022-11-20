const logo: string = require("~/static/logo.svg");
const backIcon: string = require("~/static/icons/left-arrow.svg");
const chatsActiveIcon: string = require("~/static/icons/chats-active.svg");
const chatsIcon: string = require("~/static/icons/chats.svg");
const logoutIcon: string = require("~/static/icons/logout.svg");
const settingsActiveIcon: string = require("~/static/icons/settings-active.svg");
const settingsIcon: string = require("~/static/icons/settings.svg");
const sendActiveIcon: string = require("~/static/icons/send-active.svg");
const sendIcon: string = require("~/static/icons/send.svg");
const userIcon: string = require("~/static/icons/user.svg");
const lockIcon: string = require("~/static/icons/lock.svg");
const avatarIcon: string = require("~/static/icons/avatar.svg");
const pageNotFound: string = require("~/static/error-404.svg");
const internalServerError: string = require("~/static/error-500.svg");

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
