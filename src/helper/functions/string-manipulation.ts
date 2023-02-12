export const titleCase = (str: string) => {
	return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
};

export const noDash = (str: string) => str.replace(/-/g, ' ');
