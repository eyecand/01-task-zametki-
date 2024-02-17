import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import { useEffect, useReducer, useState } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
        setFormValiedState(INITIAL_STATE);
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const onChange = (e) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={values.title}
          className={cn(styles['input-title'], {
            [styles['invalid']]: !isValid.title,
          })}
        ></input>
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/date-today-svgrepo-com.svg" alt="Icon calendare"></img>
          <span>Дата</span>
        </label>

        <input
          type="date"
          name="date"
          onChange={onChange}
          value={values.date}
          id="date"
          className={cn(styles['input'], {
            [styles['invalid']]: !isValid.date,
          })}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/bookcatalogue-svgrepo-com.svg" alt="Icon metki"></img>
          <span>Метки</span>
        </label>
        <input
          type="text"
          onChange={onChange}
          id="tag"
          name="tag"
          value={values.tag}
          className={styles['input']}
        ></input>
      </div>

      <textarea
        name="post"
        id=""
        onChange={onChange}
        value={values.post}
        cols="30"
        rows="10"
        className={`${styles['input']} ${isValid.post ? '' : styles.invalid}`}
      ></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;
