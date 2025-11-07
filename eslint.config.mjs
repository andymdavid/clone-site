import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";

const compat = new FlatCompat();

export default [
  ...compat.config({ extends: ["next", "next/core-web-vitals", "next/typescript"] }),
  prettier,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
];
