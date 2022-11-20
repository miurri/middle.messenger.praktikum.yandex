export type MessageInputState = {
	sendIcon: string;
	input?: string;
	onInput: (event: Event) => void;
	disabledSend: boolean;
	onSend: (event: Event) => void;
};
