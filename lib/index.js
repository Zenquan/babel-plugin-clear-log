const t = require('babel-types');

module.exports = () => {
  return {
    visitor: {
      ExpressionStatement(path) {
        const {
          node
        } = path;
        const expression = node.expression;
        if (t.isCallExpression(expression)) {
          const {
            callee
          } = expression
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
  }
};
