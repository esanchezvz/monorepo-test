import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  format: ['esm', 'cjs'],
  entry: ['src/index.ts', 'src/utils/index.ts'],
  target: ['esnext'],
  minify: true,
  clean: true,
  sourcemap: true,
  external: ['react'],
  shims: true,
  ...options,
}))
