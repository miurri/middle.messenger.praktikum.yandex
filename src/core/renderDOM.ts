import { Block } from "./Block";

export function renderDOM<
	P extends Record<string, unknown>,
	S extends Record<string, unknown> = {},
	Refs extends Record<
		string,
		Block<Record<string, unknown>, Record<string, unknown>>
	> = {}
>(block: Block<P, S, Refs>) {
	const root = document.querySelector(".app");

	root!.innerHTML = "";
	root!.appendChild(block.getContent());
}
