import React from 'react';

export class Input extends React.Component {
  showErrorMessage = () => {
    const { emptyFields, errorMessage, fieldName } = this.props;
    if (emptyFields && emptyFields[fieldName]) {
      return <div className='form-input_error'>{errorMessage}</div>;
    }
  };
  render() {
    const {
      label,
      input,
      name,
      type,
      value,
      emptyFields,
      fieldName,
      disabled,
      transparent,
    } = this.props;
    return (
      <div className='form-input'>
        <label>{label}</label>
        <div
          className={`input-container ${
            emptyFields && emptyFields[fieldName] ? 'error' : ''
          } ${disabled ? 'disabled' : ''}${transparent ? 'transparent' : ''}`}
        >
          <input type={type} name={name} value={value} {...input} />
        </div>
        {this.showErrorMessage()}
      </div>
    );
  }
}

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
