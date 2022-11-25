import { Block, EventHandlers } from "~/src/core";
import { FormValues } from "~/src/interfaces";
import { InputProps } from "~/src/atoms";
import { hasErrors, validateByField } from "~/src/utils";
import { FormProps, FormState } from "./form.types";
import template from "bundle-text:./form.hbs";
import "./form.css";

export class Form extends Block<FormProps, FormState> {
	constructor(props: FormProps & EventHandlers) {
		const { validate, formSubmit } = props;

		const returnFocus = (name: string, selectionStart: number | null) => {
			const newInput = document.querySelector(
				`input[name="${name}"]`
			) as HTMLInputElement;
			newInput?.focus();
			newInput.selectionStart = selectionStart;
		};

		const clearErrorByName = (name: string): void => {
			const nextState = {
				...this.state,
				errors: {
					...this.state.errors,
					[name]: "",
				},
			};
			this.setState(nextState);
		};

		const setErrorByName = (name: string, error: string): void => {
			const nextState = {
				...this.state,
				errors: {
					...this.state.errors,
					[name]: error,
				},
			};
			this.setState(nextState);
		};

		const updateValues = (name: string, value: unknown): void => {
			const nextState = {
				...this.state,
				values: {
					...this.state.values,
					[name]: value,
				},
			};
			this.setState(nextState);
		};

		super({
			...props,
			events: {
				focusin: (event: Event) => {
					const { name, selectionStart } =
						event.target as HTMLInputElement;

					if (this.state.errors[name] && name) {
						clearErrorByName(name);
						returnFocus(name, selectionStart);
					}
				},
				focusout: (event: Event) => {
					const { value, name } = event.target as HTMLInputElement;

					setTimeout(() => {
						const activeElement =
							document.activeElement as HTMLInputElement;

						const error = validateByField({
							validate,
							name,
							value,
						});

						if (error) {
							setErrorByName(name, error);

							if (activeElement.name) {
								returnFocus(
									activeElement.name,
									activeElement.selectionStart
								);
							}
						}
					});
				},
				input: (event: Event) => {
					const { value, name, selectionStart } =
						event.target as HTMLInputElement;

					updateValues(name, value);
					returnFocus(name, selectionStart);
				},
				submit: (event: Event) => {
					event.preventDefault();
					const values = Object.fromEntries(
						new FormData(event.target as HTMLFormElement)
					);

					const errors = validate(values);

					if (hasErrors(errors)) {
						const nextState = {
							values,
							errors,
						};
						this.setState(nextState);
					} else {
						formSubmit(values);
					}
				},
			},
		});
	}

	protected getStateFromProps(props: FormProps) {
		const getInitialValues = (fields: InputProps[]): FormValues =>
			fields.reduce((acc, field) => {
				if (field.value) {
					acc[field.name] = field.value;
				}
				return acc;
			}, {} as FormValues);

		this.state = {
			values: getInitialValues(props.fields),
			errors: {},
		};
	}

	protected render(): string {
		return template;
	}
}
