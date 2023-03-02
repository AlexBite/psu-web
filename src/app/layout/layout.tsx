import styles from './layout.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import decoLineImg from 'src/assets/deco-line-left.png';

/* eslint-disable-next-line */
export interface LayoutProps {}

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <img
        className={`${styles['deco-line__left']} d-none d-xxl-block`}
        src={decoLineImg}
      />
      <Navigation></Navigation>
      <h3 style={{ opacity: 0.5 }}>{location.state?.title}</h3>
      <Outlet />
      <div style={{ marginTop: '3rem' }}></div>
      <Footer></Footer>
    </>
  );
};
