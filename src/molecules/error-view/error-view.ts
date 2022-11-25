import { Block } from "~/src/core";
import { ErrorViewProps } from "./error-view.types";
import template from "bundle-text:./error-view.hbs";
import "./error-view.css";

export class ErrorView extends Block<ErrorViewProps> {
	constructor({ ...props }: ErrorViewProps) {
		super({ ...props });
	}

	protected render(): string {
		return template;
	}
}
