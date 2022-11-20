import { Block } from "~/src/core";
import { LOGO_IMG } from "~/src/constants";
import { ChatListProps, ChatListState } from "./chat-list.types";
import template from "bundle-text:./chat-list.hbs";
import "./chat-list.css";

export class ChatList extends Block<ChatListProps, ChatListState> {
	constructor({ ...props }: ChatListProps) {
		super({
			...props,
			events: {
				click: props.onChatClick,
			},
		});
	}

	protected getStateFromProps(props: ChatListProps) {
		const { items, activeId } = props;

		this.state = {
			logo: LOGO_IMG,
			privateItems: items.map((item) => ({
				...item,
				isActive: activeId === item.id,
			})),
		};
	}

	protected render(): string {
		return template;
	}
}
