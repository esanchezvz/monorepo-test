module.exports = {
  'src/**/*.{js,ts,jsx,tsx}': ['eslint --cache --fix --ignore-path .gitignore', 'prettier --write .'],
  /**
   * We use the function signature here so lint-staged is able to use the root tsconfig.json file.
   * @see https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
   */
  // 'src/**/*.{ts,tsx}': () => 'tsc --noEmit --skipLibCheck',
}
