import { Block } from "~/src/core";
import { ICONS } from "~/src/constants";
import { MessageInputState } from "./message-input.types";
import template from "bundle-text:./message-input.hbs";
import "./message-input.css";

export class MessageInput extends Block<{}, MessageInputState> {
	constructor({ ...props }: {}) {
		super({ ...props });
	}

	protected getStateFromProps() {
		const returnFocus = (selectionStart: number) => {
			const newInput = document.querySelector(
				`textarea`
			) as HTMLTextAreaElement;

			if (newInput) {
				newInput.focus();
				newInput.selectionStart = selectionStart;
			}
		};

		this.state = {
			sendIcon: ICONS.SEND,
			disabledSend: true,
			onInput: (event) => {
				const textarea = event.target as HTMLTextAreaElement;
				const value = textarea.value;
				if (value !== this.state.input) {
					this.setState({
						...this.state,
						input: value,
						sendIcon: value ? ICONS.SEND_ACTIVE : ICONS.SEND,
						disabledSend: !value,
					});
					returnFocus(textarea.selectionStart);
				}
			},
			onSend: () => {
				const { input, disabledSend } = this.state;
				if (!disabledSend) {
					console.log(input);
				}
			},
		};
	}

	protected render(): string {
		return template;
	}
}
