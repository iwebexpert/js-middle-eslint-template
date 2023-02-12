module.exports = {
  // eslint:recommended
  'constructor-super': 'error', // проверка вызова super() в конструкторе
  'for-direction': 'error', // проверка цикла for на конечное число итераций
  'getter-return': 'error', // обязательный return в class getter
  'no-async-promise-executor': 'error', // запрет async функции-исполнителя в Promise
  'no-case-declarations': 'error', // запрет объявления переменных, функций и классов в конструкции switch case
  'no-class-assign': 'error', // class My {} — запрет на приваивание нового значения экземпляру класса My
  'no-compare-neg-zero': 'error', // запрет на сравнение x === -0
  'no-cond-assign': 'error', // запрет на присваивание в условиях (if/for/тернарный оператор)
  'no-const-assign': 'error', // запрет на изменение константы (const)
  'no-constant-condition': 'error', // запрет на константу в условии if, for, while, ?:. Например, if (false) {}
  'no-control-regex': 'error', // запрет на упр.символы в регулярках (ASCII от 0 до 31). var pattern1 = /\x00/;
  'no-debugger': 'error', // запрет на использование debugger
  'no-delete-var': 'error', // запрет на использование оператора delete с переменной
  'no-dupe-args': 'error', // запрет одинаковых параметров в объявлений функции
  'no-dupe-class-members': 'error', // запрет повторяющихся членов (методов и свойств) класса
  // class Foo {
  //   bar() { }
  //   bar() { }
  // }
  'no-dupe-else-if': 'error', // запрет повторяющихся условий в цепочках if-else-if
  'no-dupe-keys': 'error', // запрет повторяющихся ключей в литералах объектов
  // var foo = {
  //   bar: 'baz',
  //   bar: 'qux'
  // };
  'no-duplicate-case': 'error', // запрет повторяющихся значений switch case
  'no-empty': 'error', // запрет пустых блоков кода — if(…) {}
  'no-empty-character-class': 'error', // запрет на пустые символьные классы [] в RegExp (/^abc[]/.test("abcdefg"))
  'no-empty-pattern': 'error', // запрет пустых шаблонов деструктуризации let {} = bar
  'no-ex-assign': 'error', // запрет переназначения err в catch — try {…} catch (e) {e = 10}
  'no-extra-boolean-cast': 'error', // запрет лишних логических приведений типов — let foo = !!!bar;
  'no-extra-semi': 'error', // запрет лишних точек с запятой — let x = 5;;
  'no-fallthrough': 'error', // запрет switch case без break и без комментария «fall through»
  'no-func-assign': 'error', // запрет переназначения объявления function
  'no-global-assign': 'error', // запрет переназначения глобальных переменных — window = {}
  'no-import-assign': 'error', // запрет переназначения импорта — import test from …; test = 1
  'no-inner-declarations': 'error', // запрет объявления функций и переменных внутри блоков кода
  'no-invalid-regexp': 'error', // запрет недопустимых строк регулярных выражений в RegExp()
  'no-irregular-whitespace': 'error', // запрет неправильных пробельных символов
  'no-loss-of-precision': 'error', // запрет больших чисел, которые теряют точность
  'no-misleading-character-class': 'error', // запрет проблемных регулярных выражений - /^[👍]$/
  'no-mixed-spaces-and-tabs': 'error', // запрет смешанных отступов из пробелов и табуляций
  'no-new-symbol': 'error', // запрет new Symbol()
  'no-nonoctal-decimal-escape': 'error', // запрет \8 и \9 в строковых литералах
  'no-obj-calls': 'error', // запрет вызова свойств глобального объекта как функций — let math = new Math();
  'no-octal': 'error', // запрет восьмеричных литералов — num = 071
  'no-prototype-builtins': 'error', // запрет вызова некоторых методов прототипа в объекте
  'no-redeclare': 'error', // запрет повторного объявления переменной
  'no-regex-spaces': 'error', // запрет использования нескольких пробелов в RegExp
  'no-self-assign': 'error', // запрет присваивания переменной самой себя — y = y
  'no-setter-return': 'error', // // запрет на return в setter класса
  'no-shadow-restricted-names': 'error', // запрет имен переменных и функций как NaN, undefined и т.д.
  'no-sparse-arrays': 'error', // запрет массивов с несколькими запятыми или без значений (с запятой) - items = [,];
  'no-this-before-super': 'error', // запрет в конструкторе использовать this до вызова super()
  'no-undef': 'error', // запрет на использование необъявленных переменных
  'no-unexpected-multiline': 'error', // запрет запутанных многострочных выражений
  'no-unreachable': 'error', // запрет недостижимого кода после return, throw, continue и break
  'no-unsafe-finally': 'error', // запрет return, throw, break и continue внутри блока finally
  'no-unsafe-negation': 'error', // запрет отрицания левого операнда в операторах отношения
  // if (!obj instanceof A) {
  // operator precedence makes it equivalent to (!obj) instanceof A
  // and it equivalent to always false since boolean values are not objects.
  // }
  'no-unsafe-optional-chaining': 'error', // запрет использования foo?.bar в некоторых ситуациях
  'no-unused-labels': 'error', // запрет неиспользуемых меток для цикла for
  'no-unused-vars': 'error', // запрет неиспользуемых переменных
  'no-useless-backreference': 'error', // запрет бесполезных обратных ссылок в RegExp
  'no-useless-catch': 'error', // запрет ненужных catch
  'no-useless-escape': 'error', // запрет ненужных escape-символов
  'no-with': 'error', // запрет использования with
  // with (point) {
  //   r = Math.sqrt(x * x + y * y); // is r a member of point?
  // }
  'require-yield': 'error', // требовать yield для функции-генератора
  'use-isnan': 'error', // обязательное использование isNaN() для проверки NaN
  'valid-typeof': 'error', // требовать для typeof допустимых строк, таких как "string", "undefined", "object"
};