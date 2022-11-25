import { ICONS } from "~/src/constants";
import { ChatListItem } from "~/src/organisms";
import { ChatMessage } from "./chats.types";

export const chatItems: ChatListItem[] = [
	{
		id: "first_user",
		icon: ICONS.AVATAR,
		userName: "First User",
		message: "our last message",
	},
	{
		id: "second_user",
		icon: ICONS.AVATAR,
		userName: "Second User",
		message: `our last loooooooooooooooong message test message 
		test message test message test message test message test 
		message test message test message test message test message 
		test message test message test message test message test
		message test message test message test message test message`,
	},
];

export const getHeaderTitle = (userId?: string): string => {
	switch (userId) {
		case "first_user":
			return "First User";
		case "second_user":
			return "Second User";

		default:
			return "Chats";
	}
};

export const getMessages = (userId: string): ChatMessage[] => {
	switch (userId) {
		case "first_user": {
			return [
				{
					id: "1",
					type: "outcome",
					content: "hello",
				},
				{
					id: "2",
					type: "income",
					content: "hi",
				},
				{
					id: "3",
					type: "outcome",
					content: "our last message",
				},
			];
		}
		case "second_user": {
			return [
				{
					id: "1",
					type: "outcome",
					content: "hello",
				},
				{
					id: "2",
					type: "income",
					content: "hi",
				},
				{
					id: "3",
					type: "outcome",
					content: `our last loooooooooooooooong message test message 
					test message test message test message test message test 
					message test message test message test message test message 
					test message test message test message test message test
					message test message test message test message test message`,
				},
			];
		}
		default:
			return [];
	}
};
