'use client';
import ReactSelect from 'react-select';

export default function Select(props: any) {
  return (
    <ReactSelect
      value={props.value}
      onChange={props.handleChange}
      options={props.options}
      getOptionLabel={(option: any) => option.name}
      getOptionValue={(option: any) => option.name}
    />
  );
}
