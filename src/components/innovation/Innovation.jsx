import React from 'react';
import s from './Innovation.module.scss';
import styled from 'styled-components';
import { StyledBasicButton } from '@/UI/Button';
import vars from '../../styles/variables.module.scss';

const StyledTitle = styled.h2`
  ${({ theme }) => theme.text.titleText};
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${vars.laptop}) {
    margin-top: 3%;
  }
  @media (min-width: ${vars.desktop}) {
    font-size: 3.5em;
    max-width: 40%;
  }
`;
export const Innovation = () => (
  <section className={`container ${s.innovation}`}>
    <div className={s.row1}>
      <p className={s.preText}>WITAR это…</p>
      <StyledTitle>
        Новшество дентальной имплантологии
      </StyledTitle>
    </div>
    <div className={s.row2}>
      <div className={`${s['description']}`}>
        <h3 className={`${s['description__title']} `}>
          <span
            className={`${s['description__title']} ${s['description__title-1']}`}
          >
            Система Witar
          </span>
          <span className={`${s['description__title-2']}`}>
            – единственная система циркониевых имплантов в
            России.
          </span>
        </h3>
        <p className={`${s['description__text']} `}>
          импланты AWI изготовляются из диоксида циркония,
          что на сегодняшний день является керамикой самого
          высокого уровня!
        </p>
        <p className={`${s['description__text']} `}>
          импланты AWI обеспечивают оптимальную,
          биосовместимую и надежную стоматологическую
          помощь. С нашими имплантами исключаются все
          отрицательные явления, возникающие при
          использовании имплантов из титанового сплава.
        </p>
        <p className={`${s['description__text']} `}>
          Единственная система имеющая реальные клинические
          отдаленные результаты более 15 лет
        </p>
        <StyledBasicButton>
          смотреть каталог
        </StyledBasicButton>
      </div>
      <div className={`${s['background']}`}> </div>
      <div className={s.bg1}></div>
    </div>
    <div className={s.bg2}></div>
    <div className={s.bg3}>
      диоксид <br></br>циркония <br></br>ZrO2
    </div>
  </section>
);
