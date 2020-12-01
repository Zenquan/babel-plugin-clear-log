const t = require('babel-types');

module.exports = () => {
  return {
    visitor: {
      ExpressionStatement(path) {
        let {node} = path;
        let expression = node.expression;
        if (t.isCallExpression(expression)) {
          let {callee} = expression
          if (t.isMemberExpression(callee)) {
            let {object, property} = callee
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