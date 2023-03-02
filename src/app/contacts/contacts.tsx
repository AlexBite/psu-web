import styles from './contacts.module.scss';

/* eslint-disable-next-line */
export interface ContactsProps {
}

export function Contacts(props: ContactsProps) {
	return (
		<>
			<h1 className="align-content-center">Контакты</h1>
			<div className="row">
				<div className="col-8">
					<div style={{position: 'relative', overflow: 'hidden'}}>
						<a href="https://yandex.ru/maps/org/pgniu/1694653172/?utm_medium=mapframe&utm_source=maps"
						   style={{color: '#eee', fontSize: 12, position: 'absolute', top: 0}}>ПГНИУ</a>
						<a href="https://yandex.ru/maps/50/perm/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps"
						   style={{color: '#eee', fontSize: 12, position: 'absolute', top: 14}}>ВУЗ в Перми</a>
						<a href="https://yandex.ru/maps/50/perm/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps"
						   style={{color: '#eee', fontSize: 12, position: 'absolute', top: 28}}>
							Дополнительное образование в Перми
						</a>
						<iframe
							src="https://yandex.ru/map-widget/v1/?ll=56.187505%2C58.007698&mode=poi&poi%5Bpoint%5D=56.187901%2C58.008369&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1694653172&z=16.1"
							width="560" height="400" frameBorder="1" allowFullScreen={true}
							style={{position: 'relative'}}></iframe>
					</div>
				</div>
				<div className="col-4">
					<div>Телефон</div>
					<div>E-Mail</div>
					<div>Директор</div>
				</div>
			</div>
		</>
	);
}

export default Contacts;
