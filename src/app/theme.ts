import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const colorConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config: colorConfig,
  fonts: {
    heading: 'var(--font-space-grotesk)',
    body: 'var(--font-space-grotesk)',
  },
})
