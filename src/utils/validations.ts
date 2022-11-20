import { LIMITS } from "../constants";
import { FormErrors, FormValues } from "../interfaces";

export const validateByField = ({
	validate,
	name,
	value,
}: {
	validate: (values: FormValues) => FormErrors;
	name: string;
	value: unknown;
}): string | undefined => {
	return validate({ [name]: value })?.[name];
};

export const hasErrors = (errors: FormErrors): boolean =>
	Object.values(errors).some((error) => !!error);

export const required = (value: string): string => {
	const error = "Required";
	return value?.trim()?.length !== 0 ? "" : error;
};

const validateEmail = (value: string): string => {
	const error = "Not valid email: my-expamle@email.com";
	const reg = /^[a-zA-Z0-9-_.]+@[a-zA-Z]+.[a-zA-Z]+$/;

	return reg.test(value) ? "" : error;
};

const validateMinLength = (value: string, minLimit: number): string => {
	const error = `Length shouldn't be less than ${minLimit} letters`;

	return value?.length >= minLimit ? "" : error;
};

const validateMaxLength = (value: string, maxLimit: number): string => {
	const error = `Length shouldn't be great than ${maxLimit} letters`;

	return value?.length <= maxLimit ? "" : error;
};

const validatePhone = (value: string): string => {
	const error = "Not valid phone: (+)XXXXXXXXXX";
	const reg = /^[+]?\d+$/;

	return reg.test(value) ? "" : error;
};

const validateLogin = (value: string): string => {
	const error = "Contains letters, numbers and symbols '-' and '_'";
	const reg = /^[A-Za-z\d_-]+$/;

	return reg.test(value) ? "" : error;
};

const validateName = (value: string): string => {
	const error = "Сontains only letters and starts with capital letter";
	const reg = /^[A-ZА-Я][a-zа-я]+$/;

	return reg.test(value) ? "" : error;
};

const checkCapitalLetter = (value: string): string => {
	const error = "Should contain capital letter";
	const reg = /[A-Z]/;

	return reg.test(value) ? "" : error;
};

const checkNumber = (value: string): string => {
	const error = "Should contain number";
	const reg = /\d/;

	return reg.test(value) ? "" : error;
};

export const validateFirstNameField = (value: string): string =>
	required(value) || validateName(value);

export const validateSecondNameField = (value: string): string =>
	required(value) || validateName(value);

export const validateLoginField = (value: string): string =>
	required(value) ||
	validateMinLength(value, LIMITS.LOGIN_MIN) ||
	validateMaxLength(value, LIMITS.LOGIN_MAX) ||
	validateLogin(value);

export const validateEmailField = (value: string): string =>
	required(value) || validateEmail(value);

export const validatePhoneField = (value: string): string =>
	required(value) ||
	validateMinLength(value, LIMITS.PHONE_MIN) ||
	validateMaxLength(value, LIMITS.PHONE_MAX) ||
	validatePhone(value);

export const validatePasswordField = (value: string): string =>
	required(value) ||
	checkCapitalLetter(value) ||
	checkNumber(value) ||
	validateMinLength(value, LIMITS.PASSWORD_MIN) ||
	validateMaxLength(value, LIMITS.PASSWORD_MAX);
