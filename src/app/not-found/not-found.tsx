import styles from './not-found.module.scss';

/* eslint-disable-next-line */
export interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  return (
    <div className={styles['container']}>
      <h1>Страница не найдена!</h1>
    </div>
  );
}

export default NotFound;
