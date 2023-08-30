import sharedConfig from '@form/tailwind-config'
import { Config } from 'tailwindcss'

const config: Config = {
  content: sharedConfig.content,
  presets: [sharedConfig],
}

export default config
