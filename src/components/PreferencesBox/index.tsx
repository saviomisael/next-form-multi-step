import styles from './PreferencesBox.module.scss';

export const PreferencesBox = () => {
  return (
    <fieldset className={styles['preferences-box']}>
      <div className={styles['input-box']}>
        <input
          className={styles['checkbox']}
          type="checkbox"
          name="receive-emails"
        />
        <label htmlFor="receive-emails">Receber Emails</label>
      </div>

      <div className={styles['input-box']}>
        <input
          className={styles['checkbox']}
          type="checkbox"
          name="receive-notifications"
        />
        <label htmlFor="receive-notifications">Receber Notificações</label>
      </div>
    </fieldset>
  );
};
