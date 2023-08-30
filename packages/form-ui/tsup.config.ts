import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  format: ['esm', 'cjs'],
  entry: ['src/**/*.tsx', 'src/**/*.ts'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  ...options,
}))
