import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#FFF4E6',
      200: '#FDD499',
      300: '#FDBF66',
      400: '#FCA933',
      500: '#FB9400',
    },
  },
  fontConfig: {
    Urbanist: {
      100: {
        normal: 'Urbanist-Light',
        italic: 'Urbanist-LightItalic',
      },
      200: {
        normal: 'Urbanist-Light',
        italic: 'Urbanist-LightItalic',
      },
      300: {
        normal: 'Urbanist-Light',
        italic: 'Urbanist-LightItalic',
      },
      400: {
        normal: 'Urbanist-Regular',
        italic: 'Urbanist-Italic',
      },
      500: {
        normal: 'Urbanist-Medium',
      },
      600: {
        normal: 'Urbanist-Medium',
        italic: 'Urbanist-MediumItalic',
      },
      700: {
        normal: 'Urbanist-Bold',
      },
      800: {
        normal: 'Urbanist-Bold',
        italic: 'Urbanist-BoldItalic',
      },
      900: {
        normal: 'Urbanist-Bold',
        italic: 'Urbanist-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Urbanist',
    body: 'Urbanist',
    mono: 'Urbanist',
  },
  fontSizes: {
    fontSizes: {
      '2xs': 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
  },
});
