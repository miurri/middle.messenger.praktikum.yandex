import { registerComponent } from "~/src/core";
import { Button } from "./button";
import { ImageInput } from "./image-input";
import { Input } from "./input";
import { MainHeader } from "./main-header";
import { Textarea } from "./textarea";

export { ButtonProps } from "./button";
export { ImageInputProps } from "./image-input";
export { InputProps } from "./input";

export const registerAtoms = () => {
	registerComponent(Button);
	registerComponent(ImageInput);
	registerComponent(Input);
	registerComponent(MainHeader);
	registerComponent(Textarea);
};
