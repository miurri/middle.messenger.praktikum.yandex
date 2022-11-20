export type MessageInputProps = {
	onSend: (event: Event, data?: string) => void;
};

export type MessageInputState = {
	sendIcon: string;
	input?: string;
	handleInput: (event: Event) => void;
	disabledSend: boolean;
	handleSend: (event: Event) => void;
};
