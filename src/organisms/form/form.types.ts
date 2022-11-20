import { FormErrors, FormValues } from "../../interfaces";
import { ButtonProps } from "../../atoms/button";
import { InputProps } from "../../atoms/input";

export type FormState = {
	errors: FormErrors;
	values: FormValues;
};

export type FormProps = {
	fields: InputProps[];
	buttons: ButtonProps[];
	validate: (values: FormValues) => FormErrors;
	formSubmit: (values: FormValues) => void;
};

export type FormDataProps = {
	fields: InputProps[];
	buttons: ButtonProps[];
};
