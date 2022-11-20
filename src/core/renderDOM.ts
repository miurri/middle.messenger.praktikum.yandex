import { Block } from "./Block";

export function renderDOM<T extends Record<string, any>>(block: Block<T>) {
	const root = document.querySelector(".app");

	root!.innerHTML = "";
	root!.appendChild(block.getContent());
}
