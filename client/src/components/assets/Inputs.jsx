import React from 'react';

export const Input = ({
  label,
  input,
  name,
  type,
  value,
  style,
  errorUsernameStatus,
  errorPasswordStatus,
  errorMessage,
  disabled,
  transparent,
}) => {
  const showErrorMessage = () => {
    if (errorUsernameStatus && errorMessage) {
      return <div className='form-input_error'>{errorMessage}</div>;
    } else if (errorPasswordStatus && errorMessage) {
      return <div className='form-input_error'>{errorMessage}</div>;
    }
  };

  return (
    <div className='form-input' style={style}>
      <label>{label}</label>
      <div
        className={`input-container ${
          errorUsernameStatus || errorPasswordStatus ? 'error' : ''
        } ${disabled ? 'disabled' : ''} ${transparent ? 'transparent' : ''}`}
      >
        <input type={type} name={name} value={value} {...input} />
      </div>
      {showErrorMessage()}
    </div>
  );
};

export const FileInput = ({
  input: { value: omitValue, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return <input type='file' {...inputProps} {...props} />;
};

export const Select = ({ label, name, input, options }) => {
  return (
    <div className='form-select'>
      <label>{label}</label>
      <br />
      <select autoComplete='off' name={name} {...input}>
        {options.map((option, idx) => {
          return <option key={idx}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export const Checkbox = ({ label, name, value, input }) => {
  return (
    <div className='form-checkbox'>
      <input type='checkbox' name={name} value={value} {...input} />
      <label>{label}</label>
    </div>
  );
};

export const Textarea = ({ label, name, placeholder, input }) => {
  return (
    <div className='form-textarea'>
      <label>{label}</label>
      <br />
      <textarea
        autoComplete='off'
        name={name}
        placeholder={placeholder}
        {...input}
      />
    </div>
  );
};
