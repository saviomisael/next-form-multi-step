'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks';
import { multiStepFormActions } from '@/store/slices/multi-step-form-slice';
import { MouseEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DetailsInputs } from '../DetailsInputs';
import { NavigationBar } from '../NavigationBar';
import { PreferencesBox } from '../PreferencesBox';
import { TabForm } from '../TabForm';
import styles from './FormMultiStep.module.scss';

type FormData = {
  taskName: string;
  dateToFinish: Date;
  receiveEmails: boolean;
  receiveNotifications: boolean;
};

export const FormMultiStep = () => {
  const { actualPage } = useAppSelector(({ multiStepForm }) => multiStepForm);
  const dispatch = useAppDispatch();
  const methods = useForm<FormData>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleDetailsStep = (_: MouseEvent<HTMLButtonElement>) => {
    dispatch(multiStepFormActions.goToPreferencesStep());
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const fieldsNames: Record<string, string> = {
    taskName: 'nome da tarefa',
    dateToFinish: 'previsão de término',
  };

  const fieldsWithErrors = Object.keys(errors);

  return (
    <FormProvider {...methods}>
      {fieldsWithErrors.map((x, index) => (
        <p style={{ color: 'white', fontSize: '1.8rem' }} key={index}>
          Campo {fieldsNames[x]} obrigatório.
        </p>
      ))}

      <form
        className={styles['form-multi-step']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <NavigationBar indexActive={actualPage} />
        <TabForm
          isLastStep={false}
          title="Detalhes"
          hidden={actualPage !== 0}
          buttonOnClick={handleDetailsStep}
          actualStep={actualPage}
        >
          <DetailsInputs />
        </TabForm>
        <TabForm
          isLastStep={true}
          title="Preferências"
          hidden={actualPage !== 1}
          actualStep={actualPage}
        >
          <PreferencesBox />
        </TabForm>
      </form>
    </FormProvider>
  );
};
