import { extendTheme } from '@chakra-ui/react'
import { fonts } from './fonts'

export const theme = extendTheme({
  fonts: {
    heading: fonts.spaceGrotesk.variable,
    body: fonts.spaceGrotesk.variable,
  },
})
