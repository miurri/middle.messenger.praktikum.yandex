import { registerComponent } from "~/src/core";
import { ChatList } from "./chat-list";
import { Form } from "./form";
import { Messages } from "./messages";
import { SettingList } from "./setting-list";

export { ChatListItem } from "./chat-list";
export { FormDataProps } from "./form";
export { MessageItem } from "./messages";
export { SettingListItem } from "./setting-list";

export const registerOrganisms = () => {
	registerComponent("ChatList", ChatList);
	registerComponent("Form", Form);
	registerComponent("Messages", Messages);
	registerComponent("SettingList", SettingList);
};
