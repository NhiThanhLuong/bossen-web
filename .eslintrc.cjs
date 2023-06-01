module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:testing-library/react",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "no-console": 0,
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-array-index-key": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-non-null-assertion": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "prettier/prettier": ["off", { singleQuote: true }],
    "no-restricted-imports": [
      2,
      {
        patterns: [
          "@/features/*/*",
          "@/components/*",
          "@/hooks/*",
          "@/utils/*",
          "@/ts/*/*",
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
