export const getLast = <T>(arr: T[]): T => {
	return arr[arr.length - 1];
};

export const checkIsActive = <T>(
	value: T,
	key: keyof T,
	activeKey: T[keyof T]
): boolean => value[key] === activeKey;
