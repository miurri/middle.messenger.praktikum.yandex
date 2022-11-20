export type ButtonProps = {
	modifier: "primary" | "link" | "icon";
	type: HTMLButtonElement["type"];
	text: string;
	iconSrc?: string;
	onClick?: (event: Event) => void;
	disabled?: boolean;
};
