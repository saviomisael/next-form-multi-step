'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks';
import { multiStepFormActions } from '@/store/slices/multi-step-form-slice';
import { MouseEvent } from 'react';
import { DetailsInputs } from '../DetailsInputs';
import { NavigationBar } from '../NavigationBar';
import { PreferencesBox } from '../PreferencesBox';
import { TabForm } from '../TabForm';
import styles from './FormMultiStep.module.scss';

export const FormMultiStep = () => {
  const { actualPage } = useAppSelector(({ multiStepForm }) => multiStepForm);
  const dispatch = useAppDispatch();

  const handleDetailsStep = (_: MouseEvent<HTMLButtonElement>) => {
    dispatch(multiStepFormActions.goToPreferencesStep());
  };

  return (
    <form className={styles['form-multi-step']}>
      <NavigationBar indexActive={actualPage} />
      <TabForm
        isLastStep={false}
        title="Detalhes"
        hidden={actualPage !== 0}
        buttonOnClick={handleDetailsStep}
      >
        <DetailsInputs />
      </TabForm>
      <TabForm isLastStep={true} title="Preferências" hidden={actualPage !== 1}>
        <PreferencesBox />
      </TabForm>
    </form>
  );
};
