import { Block, EventHandlers } from "~/src/core";
import { ImageInputProps } from "./image-input.types";
import template from "bundle-text:./image-input.hbs";
import "./image-input.css";

export class ImageInput extends Block<ImageInputProps> {
	constructor({ ...props }: ImageInputProps & EventHandlers) {
		const events = props.onChange
			? { events: { change: props.onChange } }
			: {};
		super({ ...props, ...events });
	}

	protected render(): string {
		return template;
	}
}
