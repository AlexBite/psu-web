import styles from './navigation.module.scss';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

/* eslint-disable-next-line */
export interface NavigationProps {
}

const ROUTES = [
	{
		path: '/',
		title: 'Главная'
	},
	{
		path: '/contacts',
		title: 'Контакты'
	},
	{
		path: '/teachers',
		title: 'Преподаватели'
	}
]

export function Navigation(props: NavigationProps) {
	const navLinks = ROUTES.map((r) => <Nav.Link key={Math.random()} as={Link} to={r.path}>{r.title}</Nav.Link>)
	return (
		<Navbar className="border-bottom" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">ПГНИУ</Navbar.Brand>
				<Nav>
					{navLinks}
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Navigation;
