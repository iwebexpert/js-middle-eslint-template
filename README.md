# Шаблон конфигурации ESLint
За основу конфигурации ESLint взяты правила из `eslint:recommended`. Описание всех основных правил из `eslint:recommended` можно посмотреть в файле [help/eslint-recommended.js](./help/eslint-recommended.js).

В файл `.vscode/settings.json` добавлены необходимые настройки `VS Code` для интеграции с ESLint и Prettier.
`Prettier` запускается с помощью плагина [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier).

## Плагин для VS Code
Для подсветки ошибок в IDE во время процесса веб-разработки необходимо дополнительно установить расширение [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) для VS Code.

## Установка зависимостей проекта
```
npm install
```

## Проверка форматирования кода проекта
```
npm run prettier
```

## Исправление форматирования кода с помощью Prettier
```
npm run prettier:fix
```

## Проверка качества кода с помощью ESLint
```
npm run lint
```

## Исправление кода с использованием ESLint и Prettier
```
npm run lint:fix
```

## Лицензия
![GitHub](https://img.shields.io/github/license/iwebexpert/js-middle-webpack-template)