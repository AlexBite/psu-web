import styles from './navigation.module.scss';
import { Link } from "react-router-dom";

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
      <nav>
          <ul>
              <li>
                  <Link to="/">Главная</Link>
              </li>
              <li>
                  <Link to="/contacts">Контакты</Link>
              </li>
              <li>
                  <Link to="/teachers">Преподаватели</Link>
              </li>
          </ul>
      </nav>
  );
}

export default Navigation;
