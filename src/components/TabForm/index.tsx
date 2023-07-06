import { FC, MouseEvent, ReactNode } from 'react';
import styles from './TabForm.module.scss';

export type TabFormProps = {
  isLastStep: boolean;
  children: ReactNode;
  title: string;
  buttonOnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
};

export const TabForm: FC<TabFormProps> = ({
  isLastStep,
  children,
  title,
  buttonOnClick = () => {},
  hidden = true,
}) => {
  const buttonType = isLastStep ? 'submit' : 'button';
  const buttonText = isLastStep ? 'Salvar' : 'Próximo';
  const tabFormStyles = hidden
    ? `${styles['tab-form']} ${styles['-hidden']}`
    : styles['tab-form'];

  return (
    <section className={tabFormStyles}>
      <h2 className={styles['title']}>{title}</h2>
      <div>{children}</div>
      <div className={styles['actions-box']}>
        {isLastStep && <button className={styles['button']}>Anterior</button>}
        <button
          className={styles['button']}
          type={buttonType}
          onClick={(e) => buttonOnClick(e)}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};
