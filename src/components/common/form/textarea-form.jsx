import { Input } from 'antd';
import React from 'react'
import { Controller } from 'react-hook-form';
const TextareaForm = (props) => {
    const {
    name,
    control,
    rules,
    prefix,
    defaultValue,
    className='',
    placeholder='',
    maxLength=6,
    rows=4,
    ...rest
  } = props;
  const { TextArea } = Input;
  return (
     <Controller
        name={name}
        control={control}
        rules={rules}
        render={({  field: { onChange, onBlur, value, name, ref },
        fieldState: { error }, }) => <TextArea name={name} value={value} onChange={onChange}  className={className} defaultValue={defaultValue} rows={rows} placeholder={placeholder} maxLength={maxLength} />}
      />
  )
}

export default TextareaForm

