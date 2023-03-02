import styles from './navigation.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface NavigationProps {}

const ROUTES = [
  {
    path: '/',
    title: 'Главная',
  },
  {
    path: '/contacts',
    title: 'Контакты',
  },
  {
    path: '/teachers',
    title: 'Преподаватели',
  },
];

export function Navigation(props: NavigationProps) {
  const location = useLocation();
  const navLinks = ROUTES.map((r) => (
    <Nav.Link
      className={`${activeStyle(r.path, location.pathname)}`}
      key={Math.random()}
      as={Link}
      to={r.path}
    >
      {r.title}
    </Nav.Link>
  ));
  return (
    <Navbar className="border-bottom" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ПГНИУ
        </Navbar.Brand>
        <Nav>{navLinks}</Nav>
      </Container>
    </Navbar>
  );
}

function activeStyle(linkPath: string, curPath: string): string {
  return linkPath === curPath ? styles['nav-active'] : '';
}

export default Navigation;
