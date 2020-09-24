import { theme } from './theme';

export const device = {
  mobileS: `(min-width: ${theme.mQ.mobileS}px)`,
  mobileM: `(min-width: ${theme.mQ.mobileM}px)`,
  mobileL: `(min-width: ${theme.mQ.mobileL}px)`,
  tablet: `(min-width: ${theme.mQ.tablet}px)`,
  laptop: `(min-width: ${theme.mQ.laptop}px)`,
  laptopL: `(min-width: ${theme.mQ.laptopL}px)`,
  desktopS: `(min-width: ${theme.mQ.desktopS}px)`,
  desktop: `(min-width: ${theme.mQ.desktop}px)`,
  desktopL: `(min-width: ${theme.mQ.desktop}px)`,
};
