import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 15px;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-shadow: ${({ theme }) => theme.shadow.dropShadow};

  .heading {
    font-size: ${({ theme }) => theme.font.size.title};
    color: ${({ theme }) => theme.colors.text.white};
    text-align: center;
    padding-bottom: 15px;
  }

  .subHeading {
    color: ${({ theme }) => theme.colors.text.white};
    text-align: center;
  }
`;
