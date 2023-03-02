import styles from './main.module.scss';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1>Главная</h1>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles['carousel-img']}`}
            src="../../assets/logo.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ведущий университет</h3>
            <p>ПГНИУ - 9й в рейтинге ведущих ВУЗов РФ по версии Interfax</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles['carousel-img']}`}
            src="../../assets/profmap.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Карта профессий</h3>
            <p>Определитесь с выбором профессии будущего</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles['carousel-img']}`}
            src="../../assets/national-projects.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Национальные проекты</h3>
            <p>Наш университет участник программы поддержки ведущих вузов РФ</p>
          </Carousel.Caption>
        </Carousel.Item>
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
    </>
  );
}

export default Main;
