import { Block } from "~/src/core";
import { ICONS } from "~/src/constants";
import { MainHeaderProps, MainHeaderState } from "./main-header.types";
import template from "bundle-text:./main-header.hbs";
import "./main-header.css";

export class MainHeader extends Block<MainHeaderProps, MainHeaderState> {
	constructor({ ...props }: MainHeaderProps) {
		super({ ...props });
	}

	protected getStateFromProps() {
		this.state = {
			backIcon: ICONS.BACK,
		};
	}

	protected render(): string {
		return template;
	}
}
