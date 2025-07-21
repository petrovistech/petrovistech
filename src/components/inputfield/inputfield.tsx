'use client';

import styles from './inputfield.module.css';

interface InputFieldProps {
  label: string;
  subLabel?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  type?: string;
  isTextArea?: boolean;
  maxWords?: number;
}

export default function InputField({
  label,
  subLabel,
  placeholder,
  name,
  required = false,
  type = 'text',
  isTextArea = false,
  maxWords,
}: InputFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {subLabel && <span className={styles.subLabel}> ({subLabel})</span>}
        {required && ' *'}
      </label>
      {isTextArea ? (
        <textarea 
            name={name}
          className={styles.textarea}
          placeholder={placeholder}
          maxLength={maxWords ? maxWords * 6 : undefined} // Approximate max chars
        />
      ) : (
        <input
          name={name}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}
