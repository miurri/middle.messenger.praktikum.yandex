require("babel-core/register");

import { registerAtoms } from "./atoms";
import { renderDOM } from "./core";
import { registerMolecules } from "./molecules";
import { registerOrganisms } from "./organisms";
import {
	RootPage,
	SignInPage,
	SignUpPage,
	Error404,
	Error500,
	ChatsPage,
	SettingsPage,
} from "./pages";
import "./styles/style.css";

registerAtoms();
registerMolecules();
registerOrganisms();

document.addEventListener("DOMContentLoaded", () => {
	const page = document.location.href.split("/")[3] || "";

	switch (page) {
		case "":
			renderDOM(new RootPage());
			break;
		case "chats":
			renderDOM(new ChatsPage());
			break;
		case "sign-in":
			renderDOM(new SignInPage());
			break;
		case "sign-up":
			renderDOM(new SignUpPage());
			break;
		case "settings":
			renderDOM(new SettingsPage());
			break;
		case "error-500":
			renderDOM(new Error500());
			break;

		default:
			renderDOM(new Error404());
	}
});
