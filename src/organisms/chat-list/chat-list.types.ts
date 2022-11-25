export type ChatListItem = {
	id: string;
	isActive?: boolean;
	icon: string;
	userName: string;
	message: string;
};

export type ChatListProps = {
	activeId: string;
	items: ChatListItem[];
	onChatClick: (event: Event) => void;
};

export type ChatListState = {
	logo: string;
	privateItems: ChatListItem[];
};
