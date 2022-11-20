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

type PagesUnion =
	| RootPage
	| ChatsPage
	| SignInPage
	| SignUpPage
	| Error500
	| Error404
	| SettingsPage;

registerAtoms();
registerMolecules();
registerOrganisms();

document.addEventListener("DOMContentLoaded", () => {
	const page = document.location.href.split("/")[3] || "";

	const pages: Record<string, PagesUnion> = {
		[""]: new RootPage(),
		["chats"]: new ChatsPage(),
		["sign-in"]: new SignInPage(),
		["sign-up"]: new SignUpPage(),
		["settings"]: new SettingsPage(),
		["error-500"]: new Error500(),
	};

	// @ts-ignore
	renderDOM(pages[page] || new Error404());
});
