import styles from './DetailsInputs.module.scss';

export const DetailsInputs = () => {
  const dateNow = new Date().toISOString().split('T')[0];

  return (
    <fieldset className={styles['details-inputs']}>
      <div className={styles['input-box']}>
        <label htmlFor="name">Nome da tarefa</label>
        <input className={styles['input']} type="text" name="name" />
      </div>

      <div className={styles['input-box']}>
        <label htmlFor="date-to-complete">Previsão de término</label>
        <input
          className={styles['input']}
          type="date"
          min={dateNow}
          defaultValue={dateNow}
        />
      </div>
    </fieldset>
  );
};
