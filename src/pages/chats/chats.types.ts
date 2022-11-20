import { ChatListItem } from "~/src/organisms";

export type ChatMessage = {
	id: string;
	type: "income" | "outcome";
	content: string;
};

export type ChatsPageState = {
	chatItems: ChatListItem[];
	activeChatId?: string;
	handleChatClick: (event: Event) => void;
	messages?: ChatMessage[];
	headerTitle: string;
	handleSendMessage: (event: Event, data?: string) => void;
};
