import React from 'react'
import { DatePicker } from 'antd';
import { Controller } from 'react-hook-form';
import { useForm } from "react-hook-form";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const DateForm = (props) => {
     const {
    name,
    control,
    rules,
    prefix,
    defaultValue,
    className='',
    dateFormat ='YYYY/MM/DD',
    ...rest
  } = props;
    const { RangePicker } = DatePicker;
    const {setValue} = useForm() ;
//   const [dates, setDates] = useState(null);
//   const [value, setValue] = useState(null);
//   const disabledDate = (current) => {
//     if (!dates) {
//       return false;
//     }
//     const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
//     const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
//     return !!tooEarly || !!tooLate;
//   };
//   const onOpenChange = (open) => {
//     if (open) {
//       setDates([null, null]);
//     } else {
//       setDates(null);
//     }
//   };
  return (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({  field: { onChange, onBlur, value, name, ref },
        fieldState: { error }, }) => <RangePicker format={dateFormat} name={name} value={value ?? null} onChange={ (date ,dateStrings) => {
                onChange(date ? date.valueOf() : null);
              //console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
                setValue("date.from",dateStrings[0])
                setValue("date.to",dateStrings[1] )
              } }  className={className} defaultValue={defaultValue} changeOnBlur />}
      />
  )
}

export default DateForm 



