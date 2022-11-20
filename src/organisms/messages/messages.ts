import { Block } from "~/src/core";
import { MessagesProps } from "./messages.types";
import template from "bundle-text:./messages.hbs";
import "./messages.css";

export class Messages extends Block<MessagesProps> {
	constructor(props: MessagesProps) {
		super({ ...props });
	}

	protected getStateFromProps() {
		this.state = {};
	}

	protected render(): string {
		return template;
	}
}
