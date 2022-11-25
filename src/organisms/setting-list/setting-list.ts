import { Block } from "~/src/core";
import { LOGO_IMG } from "~/src/constants";
import { checkIsActive } from "~/src/utils";
import { SettingListProps, SettingListState } from "./setting-list.types";
import template from "bundle-text:./setting-list.hbs";
import "./setting-list.css";

export class SettingList extends Block<SettingListProps, SettingListState> {
	constructor({ ...props }: SettingListProps) {
		super({
			...props,
			events: {
				click: props.onSettingClick,
			},
		});
	}

	protected getStateFromProps(props: SettingListProps) {
		const { activeId, items } = props;

		this.state = {
			logo: LOGO_IMG,
			listItems: items?.map((item) => ({
				...item,
				isActive: checkIsActive(item, "id", activeId),
			})),
		};
	}

	protected render(): string {
		return template;
	}
}
