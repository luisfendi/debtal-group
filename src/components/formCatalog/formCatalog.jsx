import React from 'react';
import styled from 'styled-components';
import { StyledBasicButton } from '@/UI/Button';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from 'styled-components';
import vars from '../../styles/variables.module.scss';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 5%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  @media (min-width: ${vars.laptop}) {
    width: 45%;
    padding: 2%;
  }
  @media (min-width: ${vars.desktop}) {
    width: 23%;
    padding: 1%;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid ${({ theme }) => theme.lightGreen};
  border-radius: 10px;
  padding: 10%;
  text-align: center;
  .formText {
    margin-top: 3%;
  }
  .footer {
    display: flex;
    margin-top: 10%;
    align-items: center;
    .form__label {
      font-family: 'Roboto';
      font-style: normal;
      font-size: 10px;
    }
  }
`;

const StyledTextField = styled.input`
  background-color: transparent;
  margin-top: 10%;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid black;
  width: 90%;
  line-height: 26px;
`;

const StyledCheckbox = styled(Checkbox)``;

export const FormCatalog = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Form>
        <h4 className='formTitle'>Каталог WITAR</h4>
        <p className='formText'>
          заполните форму и получите каталог продукции
        </p>
        <StyledTextField
          required
          id='callName'
          label='Ваше имя'
          defaultValue='Введите свое имя'
        ></StyledTextField>
        <StyledTextField
          required
          id='phoneNumber'
          label='Номер телефона'
          defaultValue='+ 375'
        ></StyledTextField>
        <StyledBasicButton sx={{ display: 'block' }}>
          получить каталог
        </StyledBasicButton>

        <div className='footer'>
          <StyledCheckbox
            id='dataAgree'
            sx={{
              color: theme.lightGreen,
              '&.Mui-checked': {
                color: theme.lightGreen,
                opacity: 0.7,
              },
            }}
          ></StyledCheckbox>
          <label
            className='form__label'
            htmlFor='dataAgree'
          >
            Вы соглашаетесь на условия обработки
            персональных данных
          </label>
        </div>
      </Form>
    </Wrapper>
  );
};
