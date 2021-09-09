const MAX_DECS_LENGTH = 20;
export const cutSymbols = (str) => str.length > MAX_DECS_LENGTH ? `${str.substring(0, MAX_DECS_LENGTH)}...` : str;
