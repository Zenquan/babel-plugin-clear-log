const babel = require('babel-core'); 
const clearConsolePlugin = require('../lib')

const exampleFn = () => {
  console.log('111')
  let a = 1;
  console.log(a)
  const fn = () => {
    let a = 11;
    console.log({a: 1, b: 2})
  } 
  return a;
};

let d = babel.transform(exampleFn, {
  plugins: [
    /**
        { "disable": true }
        () => {
          console.log('111');
          let a = 1;
          console.log(a);
          const fn = () => {
            let a = 11;
            console.log({ a: 1, b: 2 });
          };
        { "disable": false }  
        () => {
          let a = 1;

          const fn = () => {
            let a = 11;
          };
          return a;
        };
     */
    [clearConsolePlugin, {
      "disable": false
    }]
  ]
})

console.log('>>>', d.code);