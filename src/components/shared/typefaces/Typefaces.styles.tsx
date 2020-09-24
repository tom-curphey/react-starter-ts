import styled from 'styled-components';
import { IH1Props, IPProps } from './typefaces.types';

export const H1 = styled.h1<IH1Props>`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme, size }) =>
    size ? theme.font.size[size] : theme.font.size.large};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.font.weight[weight] : theme.font.weight.medium};
  color: ${({ color, theme }) =>
    color ? theme.colors.text[color] : theme.colors.text.default};
`;

export const P = styled.p<IPProps>`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme, size }) =>
    size ? theme.font.size[size] : theme.font.size.default};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.font.weight[weight] : theme.font.weight.default};
  color: ${({ color, theme }) =>
    color ? theme.colors.text[color] : theme.colors.text.default};
`;
