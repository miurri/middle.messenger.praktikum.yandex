declare global {
	export type Nullable<T> = T | null;

	export type Keys<T extends Record<string, unknown>> = keyof T;
	export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

declare module "bundle-text:*" {
	const value: string;
	export default value;
}

export {};
