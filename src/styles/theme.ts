const greyFaded = '#999'; //"#858585";
const grey = '#666';
const black = '#000';
const primary = '#F98D0F';
const secondary = '#1BAB3A';
const white = '#FFFFFF';
const defaultLight = '#F1EDE7';

export const theme = {
  colors: {
    primary: {
      default: primary,
      faded: '#FABA6F',
      dark: '#BF6B0C',
    },
    secondary: {
      default: secondary,
      faded: '#74B883',
      dark: '#137B29',
    },
    default: {
      default: '#CDC0B2',
      faded: '#D7CCC1',
      light: defaultLight,
    },
    grey: {
      default: grey,
      faded: greyFaded,
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
      black: black,
      white: white,
      error: 'red',
    },
    background: defaultLight,
    brown: '#BF6B0C',
    black: black,
  },
  font: {
    fontFamily: 'Montserrat, sans-serif',
    size: {
      default: '16px',
      small: '13px',
      button: '14px',
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
    textHeading: '0px 0px 10px rgba(0,0,0,0.50);',
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
