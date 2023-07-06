import { useFormContext } from 'react-hook-form';
import styles from './PreferencesBox.module.scss';

export const PreferencesBox = () => {
  const { register } = useFormContext();

  return (
    <fieldset className={styles['preferences-box']}>
      <div className={styles['input-box']}>
        <input
          className={styles['checkbox']}
          type="checkbox"
          {...register('receiveEmails')}
        />
        <label htmlFor="receiveEmails">Receber Emails</label>
      </div>

      <div className={styles['input-box']}>
        <input
          className={styles['checkbox']}
          type="checkbox"
          {...register('receiveNotifications')}
        />
        <label htmlFor="receiveNotifications">Receber Notificações</label>
      </div>
    </fieldset>
  );
};
