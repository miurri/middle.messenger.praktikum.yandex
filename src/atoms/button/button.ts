import { Block, EventHandlers } from "~/src/core";
import { ButtonProps } from "./button.types";
import template from "bundle-text:./button.hbs";
import "./button.css";

export class Button extends Block<ButtonProps> {
	constructor({ onClick, ...props }: ButtonProps & EventHandlers) {
		const events = onClick ? { events: { click: onClick } } : {};
		super({ ...events, ...props });
	}

	protected render(): string {
		return template;
	}
}
