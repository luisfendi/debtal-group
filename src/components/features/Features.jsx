import React from 'react';
import { FeaturesItem as Item } from './item/FeaturesItem';
import s from './Features.module.scss';

export const Features = () => {
  const featuresList = [
    {
      title: 'Натуральный цвет',
      text: 'Позволяет ещё больше оптимизировать эстетические требования клиента!',
    },
    {
      title: 'Биосовместимость',
      text: 'Эстетический результат, усовершенствованный метод установки , абсолютно биологически совместимые',
    },
    {
      title: 'Керамический абатмент',
      text: 'Абатменты, изготовленные из диоксида циркония дают безупречную эстетику реставраций, не имеют аналогов по показателям прочности и долговечности',
    },
    {
      title: 'Без применения металлов',
      text: 'Не вызывают аллергических реакций, у пациентов не наблюдаются реакции отторжения или непереносимости материала',
    },
    {
      title: 'Простота решений',
      text: 'Этот материал может применяться при различных видах непереносимости металлов, нарушении обмена веществ и аутоиммунных заболеваниях',
    },
    {
      title: 'Нанопокрытие BIOVERT I',
      text: 'Дает возможность использовать наш имплант для интеграции в любой тип кости',
    },
  ];
  return (
    <section className={`container ${s.features}`}>
      <ul className={`${s['features__list']}`}>
        <li className={`${s['features__subList']}`}>
          {featuresList
            .filter((el, i) => i < 3)
            .map(({ text, title }, i) => (
              <li
                key={i}
                className={`${s['features__item']}`}
              >
                <Item
                  text={text}
                  title={title}
                />
              </li>
            ))}
        </li>
        <li className={`${s['features__subList']}`}>
          {featuresList
            .filter((el, i) => i >= 3 && i < 6)
            .map(({ text, title }, i) => (
              <li
                key={i}
                className={`${s['features__item']}`}
              >
                <Item
                  text={text}
                  title={title}
                />
              </li>
            ))}
        </li>
      </ul>
      <div className={`${s['features__bg']}`}></div>
    </section>
  );
};
