import { Block } from "~/src/core";
import { STATUS_IMAGES } from "~/src/constants";
import template from "bundle-text:./error-500.hbs";

export class Error500 extends Block<{}> {
	constructor() {
		super();
	}

	protected getStateFromProps() {
		this.state = {
			src: STATUS_IMAGES.INTERNAL_SERVER_ERROR,
			alt: "Internal server error",
			message: "Internal server error",
		};
	}

	protected render(): string {
		return template;
	}
}
