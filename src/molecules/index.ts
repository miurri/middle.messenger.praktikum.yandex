import { registerComponent } from "~/src/core";
import { ActionsMenu } from "./actions-menu";
import { ErrorView } from "./error-view";
import { MessageInput } from "./message-input";

export const registerMolecules = () => {
	registerComponent("ActionsMenu", ActionsMenu);
	registerComponent("ErrorView", ErrorView);
	registerComponent("MessageInput", MessageInput);
};
