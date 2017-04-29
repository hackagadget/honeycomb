export const is = {
    number(value) {
        return !isNaN(parseFloat(value)) && isFinite(value)
    },

    objectLiteral(value) {
        return Object.prototype.toString.call(value) === '[object Object]'
    },

    array(value) {
        return Array.isArray(value)
    },

    undefined(value) {
        return value === void 0
    }
}

export function unsignNegativeZero(value) {
    return is.number(value) ? (value || 0) : value
}

/*eslint-env browser*/
export function stringToDOMNodes(string) {
    const div = document.createElement('div')
    div.innerHTML = string.trim()
    return div.children
}
