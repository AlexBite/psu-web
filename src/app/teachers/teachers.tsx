import styles from './teachers.module.scss';

/* eslint-disable-next-line */
export interface TeachersProps {}

export function Teachers(props: TeachersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Teachers!</h1>
    </div>
  );
}

export default Teachers;
