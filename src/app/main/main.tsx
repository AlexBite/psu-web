import styles from './main.module.scss';
import { Carousel } from "react-bootstrap";
import { useState } from "react";

/* eslint-disable-next-line */
export interface MainProps {
}

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
						src="../../assets/folks.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Поступление</h3>
						<p>
							Информация для тех, кто планирует связать свою жизнь с нашим университетом
						</p>
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
						<p>
							Наш университет участник программы поддержки ведущих вузов РФ
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="mt-3 w-50 mx-auto">
				<div className="mx-lg-5">
					<div className="row">
						<div className="col">
							<h5>Поступающим</h5>
							<div>Колледж</div>
							<div>Бакалавриат</div>
							<div>Магистратура</div>
							<div>Аспирантура</div>
						</div>
						<div className="col mt-sm-3">
							<h5>Студентам</h5>
							<div>Новости и обновления</div>
							<div>Учёба</div>
							<div>Библиотеки</div>
							<div>Спорт</div>
							<div>Творчество</div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col">
							<h5>Сотрудникам</h5>
							<div>Объявления</div>
							<div>Документы</div>
							<div>Инструкции</div>
						</div>
						<div className="col mt-5 mt-md-0">
							<h5>Выпускникам</h5>
							<div>Сотружество выпускников</div>
							<div>Дополнительное образование</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Main;
