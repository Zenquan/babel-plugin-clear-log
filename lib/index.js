const t = require('babel-types');

module.exports = () => {
  return {
    visitor: {
      ExpressionStatement(path, state) {
        const {
          node
        } = path;
        if (state.opts) {
          const {
            disable
          } = state.opts;
          if (disable) return;
        }
        const expression = node.expression;
        if (t.isCallExpression(expression)) {
          const {
            callee,
            arguments
          } = expression
          if (t.isStringLiteral(arguments[0]) && arguments[0].value.match(/err/)) return

          if (t.isMemberExpression(callee)) {
            const {
              object,
              property
            } = callee
            if (t.isIdentifier(object) && t.isIdentifier(property)) {
              if (object.name === 'console' && property.name === 'log') {
                path.remove();
              }
            }
          }
        }
      }
    }
  };
};