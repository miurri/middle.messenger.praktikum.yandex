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
	registerComponent("Button", Button);
	registerComponent("ImageInput", ImageInput);
	registerComponent("Input", Input);
	registerComponent("MainHeader", MainHeader);
	registerComponent("Textarea", Textarea);
};
