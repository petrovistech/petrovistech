'use client';

import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './inputfield.module.css';

interface InputFieldProps {
  label: string;
  subLabel?: string;
  placeholder?: string;
  type?: string;
  isTextArea?: boolean;
  maxWords?: number;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function InputField({
  label,
  subLabel,
  placeholder,
  type = 'text',
  isTextArea = false,
  maxWords,
  register,
  error,
}: InputFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {subLabel && <span className={styles.subLabel}> ({subLabel})</span>}
        <span className={styles.required}> *</span>
      </label>

      {isTextArea ? (
        <textarea
          {...register}
          className={`${styles.textarea} ${error ? styles.errorBorder : ''}`}
          placeholder={placeholder}
          maxLength={maxWords ? maxWords * 6 : undefined}
        />
      ) : (
        <input
          {...register}
          type={type}
          className={`${styles.input} ${error ? styles.errorBorder : ''}`}
          placeholder={placeholder}
        />
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
