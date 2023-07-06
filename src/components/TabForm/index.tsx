import { FC, ReactNode } from 'react';

export type TabFormProps = {
  isLastStep: boolean;
  children: ReactNode;
};

export const TabForm: FC<TabFormProps> = ({ isLastStep, children }) => {
  const buttonType = isLastStep ? 'submit' : 'button';
  const buttonText = isLastStep ? 'Salvar' : 'Próximo';

  return (
    <>
      <div>{children}</div>
      <button type={buttonType}>{buttonText}</button>
    </>
  );
};
