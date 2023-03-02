import styles from './layout.module.scss';
import { Link, Outlet } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

/* eslint-disable-next-line */
export interface LayoutProps {
}

export const Layout = () => {
	return (
		<div className="container">
			<Navigation></Navigation>
			<Outlet/>
			<Footer></Footer>
		</div>
	)
};
