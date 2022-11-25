export type SettingListItem = {
	isActive?: boolean;
	id: string;
	icon: string;
	label: string;
};

export type SettingListProps = {
	activeId: string;
	items: SettingListItem[];
	onSettingClick: (event: Event) => void;
};

export type SettingListState = {
	logo: string;
	listItems: SettingListItem[];
};
