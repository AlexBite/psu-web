/* eslint-disable-next-line */
import { Envelope, HouseDoor, Person, Telephone } from 'react-bootstrap-icons';

export interface ContactsProps {}

export function Contacts(props: ContactsProps) {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a
              href="https://yandex.ru/maps/org/pgniu/1694653172/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: 12,
                position: 'absolute',
                top: 0,
              }}
            >
              ПГНИУ
            </a>
            <a
              href="https://yandex.ru/maps/50/perm/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: 12,
                position: 'absolute',
                top: 14,
              }}
            >
              ВУЗ в Перми
            </a>
            <a
              href="https://yandex.ru/maps/50/perm/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: 12,
                position: 'absolute',
                top: 28,
              }}
            >
              Дополнительное образование в Перми
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=56.187505%2C58.007698&mode=poi&poi%5Bpoint%5D=56.187901%2C58.008369&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1694653172&z=16.1"
              height="400"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: 'relative', width: '100%' }}
            ></iframe>
          </div>
        </div>
        <div
          className="col-md-4 mt-3 mt-md-0"
          style={{ alignSelf: 'flex-start', borderLeft: '3px solid #C62E3E' }}
        >
          <div>
            <Telephone
              style={{ marginRight: 10, color: '#C62E3E' }}
            ></Telephone>
            <span>Телефон: (342) 2-396-400, 2-371-718, 2-371-611 (факс)</span>
          </div>
          <div style={{ marginTop: '10px' }}>
            <Envelope style={{ marginRight: 10, color: '#C62E3E' }}></Envelope>
            E-Mail: malanin@psu.ru
          </div>
          <div style={{ marginTop: '10px' }}>
            <Person style={{ marginRight: 10, color: '#C62E3E' }}></Person>
            Президент: Владимир Владимирович Маланин
          </div>
          <div style={{ marginTop: '10px' }}>
            <HouseDoor
              style={{ marginRight: 10, color: '#C62E3E' }}
            ></HouseDoor>
            <span>Приёмная:</span>
            <span> Корпус 8, эт. 3</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
