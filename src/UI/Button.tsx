import Button from '@mui/material/Button';
import styled from 'styled-components';
import vars from '../styles/variables.module.scss';

export const StyledBasicButton = styled(Button).attrs(
  () => ({
    variant: 'contained',
  }),
)`
  ${({ theme }) => theme.gradientGreen};
  box-shadow: 0px 4px 0px #1b7964, 0px 16px 32px #b4dfd7;
  color: white;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${vars.desktop}) {
    font-size: 1.3em;
  }
`;
