import React from "react";
import { Radio } from "antd";
import { Controller } from "react-hook-form";
const RadioForm = (props) => {
  const {
    name,
    control,
    rules,
    prefix,
    defaultValue,
    className = "",
    options = [],
    ...rest
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <Radio.Group
          name={name}
          value={value}
          onChange={onChange}
          className={className}
          defaultValue={defaultValue}
        >
          {options.map((item) => {
            return <Radio value={item.value ?? false}>{item.label}</Radio>;
          })}
        </Radio.Group>
      )}
    />
  );
};

export default RadioForm;

// import { useState } from 'react';
// const App = () => {
//   const [value, setValue] = useState(1);
//   const onChange = (e) => {
//     console.log('radio checked', e.target.value);
//     setValue(e.target.value);
//   };
//   return (
//     <Radio.Group onChange={onChange} value={value}>
//       <Radio value={1}>A</Radio>
//       <Radio value={2}>B</Radio>
//       <Radio value={3}>C</Radio>
//       <Radio value={4}>D</Radio>
//     </Radio.Group>
//   );
// };
// export default App;
