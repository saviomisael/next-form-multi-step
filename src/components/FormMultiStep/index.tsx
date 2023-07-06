'use client';

import { DetailsInputs } from '../DetailsInputs';
import { NavigationBar } from '../NavigationBar';
import { PreferencesBox } from '../PreferencesBox';
import { TabForm } from '../TabForm';
import styles from './FormMultiStep.module.scss';

export const FormMultiStep = () => {
  const actualIndex: number = 1;
  return (
    <form className={styles['form-multi-step']}>
      <NavigationBar indexActive={actualIndex} />
      <TabForm isLastStep={false} title="Detalhes" hidden={actualIndex !== 0}>
        <DetailsInputs />
      </TabForm>
      <TabForm
        isLastStep={true}
        title="Preferências"
        hidden={actualIndex !== 1}
      >
        <PreferencesBox />
      </TabForm>
    </form>
  );
};
