
/**
 * Export `maskXml` function.
 */

module.exports = (elements, {
  ignoreCase = false,
  replacement = '--REDACTED--'
} = {}) => {
  return value => {
    if (typeof value !== 'string') {
      return value;
    }

    for (const element of elements) {
      const search = new RegExp(`<(${element})>[^</]*</(${element})>`, `g${ignoreCase ? 'i' : ''}`);

      value = value.replace(search, `<$1>${replacement}</$2>`);
    }

    return value;
  };
};
