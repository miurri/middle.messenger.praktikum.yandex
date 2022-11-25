import { Block } from "~/src/core";
import { ActionsMenuProps, ActionsMenuState } from "./actions-menu.types";
import { getItems } from "./actions-menu.constants";
import template from "bundle-text:./actions-menu.hbs";
import "./actions-menu.css";

export class ActionsMenu extends Block<ActionsMenuProps, ActionsMenuState> {
	constructor({ ...props }: ActionsMenuProps) {
		super({ ...props });
	}

	protected getStateFromProps(props: ActionsMenuProps) {
		const { active } = props;

		this.state = {
			items: getItems(active),
		};
	}

	protected render(): string {
		return template;
	}
}
