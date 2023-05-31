import React from 'react'
import {  Select} from 'antd';
import { Controller } from 'react-hook-form';
const SelectForm = (props) => {
     const {
    name,
    control,
    rules,
    prefix,
    defaultValue,
    className='',
    options,
    ...rest
  } = props;
  return (
     <Controller
        name={name}
        control={control}
        rules={rules}
        render={({  field: { onChange, onBlur, value, name, ref },
        fieldState: { error }, }) => <Select name={name} value={value}  onChange={onChange} className={className} defaultValue={defaultValue} options={options} />}
      />
  )
}

export default  SelectForm