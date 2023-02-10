import React, { useState } from 'react';
import s from './FeaturesItem.module.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import styled, { css } from 'styled-components';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

const ButtonWrapper = styled('div').attrs(() => ({
  'aria-label': 'see feature',
}))`
  ${'' /* color: ${({theme}) => theme.lightGreen} */}
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.lightGreen};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;
  transform: translateY(20%);
`;

const hidden = css`
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10%);
  transition-delay: 0.2s;
`;
const visible = css`
  visibility: bisible;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  transform: translateY(0);
`;
const HiddenText = styled.p`
  margin-top: 2em;
  ${({ theme }) => theme.text.simpleText};
  ${({ open }) => (open ? visible : hidden)}
`;

const StyledButton = styled(IconButton).attrs(() => ({
  'aria-label': 'see feature',
}))`
  color: ${({ theme }) => theme.lightGreen};
`;

const StyledTitle = styled.h4`
  ${({ theme }) => theme.text.titleText};
  font-size: 1.1em;
  line-height: 1;
`;

export const FeaturesItem = ({ title, text }) => {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className={s.wrapper}>
      <div
        className={`${s.content} ${open ? s.open : null}`}
      >
        <StyledTitle>{title}</StyledTitle>
        <HiddenText open={open}>{text}</HiddenText>
      </div>

      {open ? (
        <ButtonWrapper>
          <StyledButton onClick={() => setOpen(false)}>
            <RemoveCircleOutlinedIcon />
          </StyledButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <StyledButton onClick={() => setOpen(true)}>
            <AddCircleIcon />
          </StyledButton>
        </ButtonWrapper>
      )}
    </div>
  );
};
