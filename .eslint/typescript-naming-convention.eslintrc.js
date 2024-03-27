/**
 * @author Dmytro Vakulenko
 * @description Best practices for naming in JS / TS
 * @version 1.0
 * */
module.exports = {
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "parser": "@typescript-eslint/parser",
      "rules": {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "objectLiteralProperty",
            "format": ["camelCase", "snake_case", "PascalCase"]
          },
          {
            "selector": "memberLike",
            "modifiers": ["public", "static"],
            "format": ["PascalCase", "UPPER_CASE"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "memberLike",
            "modifiers": ["private", "static"],
            "format": ["PascalCase", "UPPER_CASE"],
            "leadingUnderscore": "forbid"
          },
          {
            "selector": "memberLike",
            "modifiers": ["public"],
            "format": ["camelCase", "snake_case"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "memberLike",
            "modifiers": ["private"],
            "format": ["camelCase"],
            "leadingUnderscore": "forbid"
          },
          {
            "selector": "memberLike",
            "modifiers": ["protected"],
            "format": ["camelCase"],
            "leadingUnderscore": "require"
          },
          {
            "selector": "parameter",
            "format": ["camelCase", "snake_case"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "enumMember",
            "format": ["UPPER_CASE"]
          },
          {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^[IT][A-Z]",
              "match": false
            }
          },
          {
            "selector": "class",
            "format": ["PascalCase"]
          },
          {
            "selector": "enum",
            "format": ["PascalCase"],
            "custom": {
              "regex": "(^[IT][A-Z])|(.*es$)|(.*[^u]s$)",
              "match": false
            }
          },
          {
            "selector": "typeLike",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^[IT][A-Z]",
              "match": false
            }
          },
          {
            "selector": "variable",
            "format": ["camelCase", "UPPER_CASE"]
          },
          {
            "selector": "variable",
            "modifiers": ["const", "global"],
            "format": ["camelCase", "UPPER_CASE", "PascalCase"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "variable",
            "modifiers": ["destructured"],
            "format": ["PascalCase", "camelCase", "snake_case"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "variable",
            "types": ["boolean"],
            "format": ["PascalCase"],
            "prefix": ["is", "should", "has", "can", "did", "will"]
          },
          {
            "selector": "parameter",
            "modifiers": ["destructured"],
            "format": ["camelCase", "snake_case"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "function",
            "format": ["PascalCase", "camelCase"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "function",
            "modifiers": ["exported", "global"],
            "format": ["PascalCase", "camelCase"],
            "leadingUnderscore": "allow"
          },
          {
            "selector": [
              "classProperty",
              "objectLiteralProperty",
              "typeProperty",
              "classMethod",
              "objectLiteralMethod",
              "typeMethod",
              "accessor",
              "enumMember"
            ],
            "format": null,
            "modifiers": ["requiresQuotes"]
          },
          {
            "selector": "function",
            "format": ["camelCase"]
          }
        ],
      }
    }
  ]
}
