module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // eslint 识别此选项
  parserOptions: {
    ecmaVersion: 6, // 指定ECMAScript的版本为 6
    parser: '@typescript-eslint/parser', // 解析 ts
    sourceType: 'module'
  },
  // 全局变量
  globals: {
    window: true,
    document: true,
    __dirname: true,
    process: true
  },
  // 兼容环境
  env: {
    browser: true
  },
  // 插件
  extends: ['standard'],
  // 规则
  rules: {
    // 末尾不加分号，只有在有可能语法错误时才会加分号
    semi: 'warn',
    // 箭头函数需要有括号 (a) => {}
    'arrow-parens': 0,
    // 两个空格缩进， switch 语句中的 case 为 1 个空格
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-useless-escape': 'off',
    // 关闭副作用的 new
    'no-new': 'off',
    // 每行最大长度小于 80，忽略注释
    // 'max-len': ['error', { ignoreComments: true, "comments": 120 }],
    // 关闭要求 require() 出现在顶层模块作用域中
    'global-require': 0,
    // 关闭类方法中必须使用this
    'class-methods-use-this': 0,
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 0,
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 0,
    // 禁止末尾空行
    'eol-last': 1,
    // 关闭禁止对 function 的参数进行重新赋值
    'no-param-reassign': 0,
    // 关闭要求构造函数首字母大写
    'new-cap': 0,
    // 全等校验
    eqeqeq: 'error',
    // 禁止使用拖尾逗号
    'comma-dangle': ['error', 'never'],
    // 关闭强制使用骆驼拼写法命名约定
    camelcase: 0
  }
}
