import styles from './footer.module.scss';
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

/* eslint-disable-next-line */
export interface FooterProps {
}

export function Footer(props: FooterProps) {
	return (
		<footer className="py-3 border-top">
			<div className="row">
				<div className="col-6 col-md-2 mb-3">
					<h5>Университет</h5>
					<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ректорат</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Приёмная</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Факультеты</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Подразделения</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Пресс-служба</a></li>
					</ul>
				</div>

				<div className="col-6 col-md-2 mb-3">
					<h5>Образование</h5>
					<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Довузовское</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Высшее</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Среднее</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Профпереподготовка</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Международное образование</a></li>
					</ul>
				</div>

				<div className="col-6 col-md-2 mb-3">
					<h5>Официальная информация</h5>
					<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Фотогалерея</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Видеогалерея</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Цифры и факты</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Новости ПГНИУ</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Нормативы</a></li>
					</ul>
				</div>

				<div className="col-md-5 offset-md-1 mb-3">
					<form>
						<h5>Подпишитесь на обновления</h5>
						<p>Ежемесячная рассылка о наших невероятных изменениях</p>
						<div className="d-flex flex-column flex-sm-row w-100 gap-2">
							<label htmlFor="newsletter1" className="visually-hidden">Email address</label>
							<input id="newsletter1" type="text" className="form-control"
								   placeholder="user@mail.ru"></input>
							<button className="btn btn-primary" type="button">Subscribe</button>
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
