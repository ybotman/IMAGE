import eslintRecommended from '@eslint/js' // Import ESLint's recommended rules
import prettierConfig from 'eslint-config-prettier' // Import Prettier configuration
import prettierPlugin from 'eslint-plugin-prettier' // Import Prettier plugin

export default [
  eslintRecommended.configs.recommended, // Include ESLint's recommended rules
  prettierConfig, // Include Prettier configuration for compatibility
  {
    plugins: {
      prettier: prettierPlugin, // Add Prettier as a plugin
    },
    rules: {
      'prettier/prettier': 'error', // Ensure Prettier formatting is enforced as an error
      // Add other custom rules here if needed
    },
  },
]
