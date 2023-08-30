import sharedConfig from '@form/tailwind-config'
import { Config } from 'tailwindcss'

const config: Config = {
  'postcss-import': {},
  content: sharedConfig.content,
  presets: [sharedConfig],
}

export default config
