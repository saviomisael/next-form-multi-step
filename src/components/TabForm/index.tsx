import { FC, MouseEvent, ReactNode } from 'react';
import styles from './TabForm.module.scss';

export type TabFormProps = {
  isLastStep: boolean;
  children: ReactNode;
  title: string;
  buttonOnClick?: (e?: MouseEvent<HTMLButtonElement>) => {};
};

export const TabForm: FC<TabFormProps> = ({
  isLastStep,
  children,
  title,
  buttonOnClick = () => {},
}) => {
  const buttonType = isLastStep ? 'submit' : 'button';
  const buttonText = isLastStep ? 'Salvar' : 'Próximo';

  return (
    <section className={styles['tab-form']}>
      <h2 className={styles['title']}>{title}</h2>
      <div>{children}</div>
      <button
        className={styles['button']}
        type={buttonType}
        onClick={(e) => buttonOnClick(e)}
      >
        {buttonText}
      </button>
    </section>
  );
};
