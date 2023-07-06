import { FC } from 'react';
import styles from './NavigationBar.module.scss';

export type NavigationBarProps = {
  indexActive: number;
};

export const NavigationBar: FC<NavigationBarProps> = ({ indexActive }) => {
  const tabs = ['Detalhes', 'Preferências'];
  const tabButtonStyles = (isActive: boolean) =>
    isActive ? styles['-active'] : '';
  return (
    <nav className={styles['navigation-bar']}>
      {tabs.map((x, index) => (
        <button
          className={`${styles['tab-button']} ${tabButtonStyles(
            indexActive === index,
          )}`}
          key={x}
        >
          <span className={styles['tabnumber']}>{index + 1}</span>
          <p className={styles['tabtext']}>{x}</p>
        </button>
      ))}
    </nav>
  );
};
