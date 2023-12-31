import { useAppDispatch } from '@/store/hooks/store-hooks';
import { multiStepFormActions } from '@/store/slices/multi-step-form-slice';
import { FC, MouseEvent, ReactNode } from 'react';
import styles from './TabForm.module.scss';

export type TabFormProps = {
  isLastStep: boolean;
  children: ReactNode;
  title: string;
  buttonOnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
  actualStep: number;
};

export const TabForm: FC<TabFormProps> = ({
  isLastStep,
  children,
  title,
  buttonOnClick = () => {},
  hidden = true,
  actualStep,
}) => {
  const dispatch = useAppDispatch();
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
        {actualStep > 0 && (
          <button
            onClick={() => dispatch(multiStepFormActions.returnStep())}
            className={styles['button']}
            type="button"
          >
            Anterior
          </button>
        )}
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
