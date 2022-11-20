import { Block } from "~/src/core";
import { STATUS_IMAGES } from "~/src/constants";
import template from "bundle-text:./error-404.hbs";

export class Error404 extends Block<{}> {
	constructor() {
		super();
	}

	protected getStateFromProps() {
		this.state = {
			src: STATUS_IMAGES.PAGE_NOT_FOUND,
			alt: "Page not found :c",
			message: "Page not found :c",
		};
	}

	protected render(): string {
		return template;
	}
}
