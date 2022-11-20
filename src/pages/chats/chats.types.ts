import { ChatListItem } from "~/src/organisms";

export type ChatMessage = {
	id: string;
	type: "income" | "outcome";
	content: string;
};

export type ChatsPageState = {
	chatItems: ChatListItem[];
	activeChatId?: string;
	onChatClick: (event: Event) => void;
	messages?: ChatMessage[];
	headerTitle: string;
};
