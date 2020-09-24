const greyFaded = '#999';
const grey = '#4d4d54';
const greyDark = '#212129';
const black = '#000';
const primary = '#f98d0f';
const secondary = '#FFFFFF';
const alert = '#FFFFFF';
const white = '#FFFFFF';
const defaultLight = '#f5f5f5';
export const fontFamily = 'Arial,sans-serif';

export const theme = {
  colors: {
    primary: {
      default: primary,
      faded: '#DC1929',
      dark: '#B71521',
    },
    secondary: {
      default: secondary,
      faded: '#FFFFFF',
      dark: '#FFFFFF',
    },
    default: {
      default: '#FFFFFF',
      faded: '#FFFFFF',
      light: defaultLight,
    },
    grey: {
      default: grey,
      faded: greyFaded,
      dark: greyDark,
    },
    white: {
      default: white,
      faded: 'rgba(255, 255, 255, 0.8)',
      light: 'rgba(255, 255, 255, 0.2)',
    },
    text: {
      default: '#343434',
      faded: greyFaded,
      grey: grey,
      secondary: secondary,
      primary: primary,
      black: greyDark,
      white: white,
      error: primary,
    },
    background: defaultLight,
    alert: alert,
    black: black,
  },
  font: {
    family: fontFamily,
    size: {
      smaller: '13px',
      small: '14px',
      default: '16px',
      medium: '20px',
      large: '24px',
      heading: '30px',
      largeHeading: '40px',
      title: '50px',
    },
    lineHeight: {
      default: '20px',
      small: '18px',
      button: '14px',
      medium: '20px',
      large: '24px',
      heading: '30px',
      largeHeading: '40px',
      title: '50px',
    },
    weight: {
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400',
      light: '100',
    },
  },
  shadow: {
    box: '0px 0px 25px rgba(0, 0, 0, 0.15);',
    smallBox: '4px 4px 15px 0 rgba(0, 0, 0, 0.15);',
    text: '0px 0px 25px rgba(0, 0, 0, 0.15);',
    textHeading: '0px 0px 10px rgba(0, 0, 0, 0.50);',
    dropShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
  },
  iconSize: {
    tiny: '10px',
    smaller: '15px',
    small: '20px',
    medium: '30px',
    large: '40px',
    xlarge: '70px',
    default: '50px',
  },
  mQ: {
    mobileS: 320,
    mobileM: 480,
    mobileL: 630,
    tablet: 750,
    laptop: 1024,
    laptopL: 1160,
    desktopS: 1350,
    desktop: 2560,
  },
  zIndex: {
    below: '-1',
    default: '0',
    above: '2',
    priority: '5',
    nav: '9',
    menu: '10',
    toggle: '11',
  },
};
