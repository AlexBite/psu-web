import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import decoLineImg from 'src/assets/deco-line-left.png';

/* eslint-disable-next-line */
export interface LayoutProps {}

export const Layout = () => {
  return (
    <>
      <img
        className={`${styles['deco-line__left']} d-none d-xxl-block`}
        src={decoLineImg}
      />
      <Navigation></Navigation>
      <Outlet />
        <div style={{marginTop: '3rem'}}></div>
      <Footer></Footer>
    </>
  );
};
