import { Block } from "~/src/core";
import { ChatsPageState } from "./chats.types";
import { chatItems, getHeaderTitle, getMessages } from "./chats.constants";
import template from "bundle-text:./chats.hbs";
import "./chats.css";

export class ChatsPage extends Block<{}, ChatsPageState> {
	constructor() {
		super();
	}

	protected getStateFromProps() {
		this.state = {
			chatItems,
			headerTitle: getHeaderTitle(),
			handleSendMessage: (event, data) => {
				console.log({ data, event });
			},
			handleChatClick: (event) => {
				const li = (event.target as HTMLElement)?.closest(
					".sidebar-list-item"
				) as HTMLLIElement | undefined;
				const userId = li?.dataset.id;

				if (userId) {
					const nextState = {
						...this.state,
						activeChatId: userId,
						headerTitle: getHeaderTitle(userId),
						messages: getMessages(userId),
					};
					this.setState(nextState);
				}
			},
		};
	}

	protected render(): string {
		return template;
	}
}
