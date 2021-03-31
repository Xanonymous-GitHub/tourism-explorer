export const isEmptyObject = (object?: Object): boolean => {
    return !Boolean(object) || (Object.keys(object as Object).length === 0 && (object as Object).constructor === Object)
}