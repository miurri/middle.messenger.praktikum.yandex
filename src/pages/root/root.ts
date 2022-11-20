import { Block } from "~/src/core";
import template from "bundle-text:./root.hbs";

export class RootPage extends Block<{}> {
	render(): string {
		return template;
	}
}
