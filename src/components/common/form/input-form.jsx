import React from 'react'
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
const InputForm = (props) => {
    const {
    name,
    control,
    rules,
    prefix,
    defaultValue,
    className='',
    ...rest
  } = props;

  return (
   <Controller
        name={name}
        control={control}
        rules={rules}
        render={({  field: { onChange, onBlur, value, name, ref },
        fieldState: { error }, }) => <Input name={name} value={value} onChange={onChange}  className={className} defaultValue={defaultValue} />}
      />
  )
}

export default InputForm