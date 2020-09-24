import React, { FC } from 'react';
import { H1, P } from '../../typefaces/Typefaces.styles';
import { Container } from './Header.styles';
import { IHeaderProps } from './header.types';

const Header: FC<IHeaderProps> = ({ heading, subHeading }) => {
  return (
    <Container>
      <H1 className="heading">{heading}</H1>
      <P className="subHeading">{subHeading}</P>
    </Container>
  );
};

export default Header;
