import styles from './contacts.module.scss';

/* eslint-disable-next-line */
export interface ContactsProps {}

export function Contacts(props: ContactsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Contacts!</h1>
    </div>
  );
}

export default Contacts;
