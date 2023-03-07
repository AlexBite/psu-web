import styles from './main.module.scss';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import logoImage from 'src/assets/logo.jpg';
import profmapImage from 'src/assets/profmap.png';
import nationalProjectImage from 'src/assets/national-projects.jpg';
import panoramaImage from 'src/assets/panorama.jpg';

/* eslint-disable-next-line */
export interface MainProps {}

interface ICarouselData {
  src: string;
  title: string;
  subTitle: string;
}

export function Main(props: MainProps) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const carouselData = [
    {
      src: logoImage,
      title: 'Ведущий университет',
      subTitle: 'ПГНИУ - 9й в рейтинге ведущих ВУЗов РФ по версии Interfax',
    },
    {
      src: profmapImage,
      title: 'Карта профессий',
      subTitle: 'Определитесь с выбором профессии будущего',
    },
    {
      src: nationalProjectImage,
      title: 'Национальные проекты',
      subTitle: 'Наш университет участник программы поддержки ведущих вузов РФ',
    },
  ];

  const buildItems = (data: ICarouselData[]): JSX.Element[] => {
    return data.map((i) => {
      return (
        <Carousel.Item key={Math.random()}>
          <img
            className={`d-block w-100 ${styles['carousel-img']}`}
            src={i.src}
            alt="Slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: '#3c3c3b' }}>{i.title}</h3>
            <p>{i.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  return (
    <>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        {buildItems(carouselData)}
      </Carousel>
      <div>
        <div className="mt-3 w-50 mx-auto">
          <div className="mx-lg-5">
            <div className="row">
              <div className="col">
                <h5>Поступающим</h5>
                <a href="#" className="nav-link p-0 text-muted">
                  Колледж
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Бакалавриат
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Магистратура
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Аспирантура
                </a>
              </div>
              <div className="col mt-5 mt-md-0">
                <h5>Студентам</h5>
                <a href="#" className="nav-link p-0 text-muted">
                  Новости и обновления
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Учёба
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Библиотеки
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Спорт
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Творчество
                </a>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <h5>Сотрудникам</h5>
                <a href="#" className="nav-link p-0 text-muted">
                  Объявления
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Документы
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Инструкции
                </a>
              </div>
              <div className="col mt-5 mt-md-0">
                <h5>Выпускникам</h5>
                <a href="#" className="nav-link p-0 text-muted">
                  Содружество выпускников
                </a>
                <a href="#" className="nav-link p-0 text-muted">
                  Дополнительное образование
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 style={{ color: '#3c3c3b' }} className="mt-5">
        Об университете
      </h3>
      <div className="row">
        <img className="col-md-6" src={panoramaImage} />
        <div className="col-md-6" style={{ fontSize: '2vh' }}>
          {' '}
          Федеральное государственное автономное образовательное учреждение
          высшего образования «Пермский государственный национальный
          исследовательский университет» (ПГНИУ) –{' '}
          <span style={{ fontWeight: 'bold', color: '#c62e3e' }}>
            первый университет на Урале
          </span>
          , один из учредителей Ассоциации классических университетов России и
          Ассоциации ведущих университетов России.
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Main;
