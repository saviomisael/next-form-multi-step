import { useAppDispatch } from '@/store/hooks/store-hooks';
import { multiStepFormActions } from '@/store/slices/multi-step-form-slice';
import { FC } from 'react';
import styles from './NavigationBar.module.scss';

export type NavigationBarProps = {
  indexActive: number;
};

export const NavigationBar: FC<NavigationBarProps> = ({ indexActive }) => {
  const dispatch = useAppDispatch();
  const tabs = ['Detalhes', 'Preferências'];

  const handleDetailsNavigation = () => {
    dispatch(multiStepFormActions.goToDetailsStep());
  };

  const handlePreferencesNavigation = () => {
    dispatch(multiStepFormActions.goToPreferencesStep());
  };

  const tabButtonStyles = (isActive: boolean) =>
    isActive ? styles['-active'] : '';
  return (
    <nav className={styles['navigation-bar']}>
      {tabs.map((x, index) => (
        <button
          onClick={() => {
            const handler =
              x === 'Detalhes'
                ? handleDetailsNavigation
                : handlePreferencesNavigation;

            handler();
          }}
          className={`${styles['tab-button']} ${tabButtonStyles(
            indexActive === index,
          )}`}
          type="button"
          key={x}
        >
          <span className={styles['tabnumber']}>{index + 1}</span>
          <p className={styles['tabtext']}>{x}</p>
        </button>
      ))}
    </nav>
  );
};
