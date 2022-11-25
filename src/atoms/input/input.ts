import { Block } from "~/src/core";
import { InputProps } from "./input.types";
import template from "bundle-text:./input.hbs";
import "./input.css";

export class Input extends Block<InputProps> {
	constructor({ ...props }: InputProps) {
		super({ ...props });
	}

	protected render(): string {
		return template;
	}
}
