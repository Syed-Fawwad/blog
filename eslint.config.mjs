import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable any type errors
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variables errors
      "react/no-unescaped-entities": "off",       // Disable unescaped characters errors
    },
  },
];

export default eslintConfig;