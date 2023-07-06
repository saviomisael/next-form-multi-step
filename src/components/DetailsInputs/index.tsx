import { useFormContext } from 'react-hook-form';
import styles from './DetailsInputs.module.scss';

export const DetailsInputs = () => {
  const { register } = useFormContext();
  const dateNow = new Date().toISOString().split('T')[0];

  return (
    <fieldset className={styles['details-inputs']}>
      <div className={styles['input-box']}>
        <label htmlFor="taskName">Nome da tarefa</label>
        <input
          className={styles['input']}
          type="text"
          {...register('taskName', { required: true, minLength: 5 })}
        />
      </div>

      <div className={styles['input-box']}>
        <label htmlFor="dateToFinish">Previsão de término</label>
        <input
          className={styles['input']}
          type="date"
          defaultValue={dateNow}
          {...register('dateToFinish', { required: true, min: dateNow })}
        />
      </div>
    </fieldset>
  );
};
