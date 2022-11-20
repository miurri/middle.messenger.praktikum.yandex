import { Block } from "~/src/core";
import { TextareaProps } from "./textarea.types";
import template from "bundle-text:./textarea.hbs";
import "./textarea.css";

export class Textarea extends Block<TextareaProps> {
	constructor({ ...props }: TextareaProps) {
		super({
			...props,
			events: {
				input: (event: Event) => {
					const textarea = event.target as HTMLTextAreaElement;
					textarea.style.height = "0";

					if (props.onInput) {
						props.onInput(event);
					}

					const scrollHeight = textarea.scrollHeight || 0;
					if (scrollHeight < 100) {
						textarea.style.height = `${scrollHeight}px`;
					}
				},
			},
		});
	}

	protected render(): string {
		return template;
	}
}
