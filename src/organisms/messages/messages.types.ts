export type MessageItem = {
	id: string;
	type: "income" | "outcome";
	content: string;
};

export type MessagesProps = {
	messages: MessageItem[];
};
