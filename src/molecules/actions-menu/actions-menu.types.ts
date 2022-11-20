export type ActionsMenuProps = {
	active: "chats" | "settings";
};

export type ActionsMenuItem = {
	alt: string;
	icon: string;
	link: string;
	isActive?: boolean;
};

export type ActionsMenuState = {
	items: ActionsMenuItem[];
};
