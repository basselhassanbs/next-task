'use client';
import { getOptionsChild } from '@/services/data';
import { ChangeEvent, useEffect, useState } from 'react';
import Select from './Select';

export default function Property(props: any) {
  const [children, setChildren] = useState([]);
  const [value, setValue] = useState<any>(props.formValues[props.name]);

  const fetchOptionChildren = async () => {
    const res = await getOptionsChild(value.id);
    setChildren(res.data.data);
  };

  useEffect(() => {
    if (value && value.child) {
      fetchOptionChildren();
    }
  }, [value]);

  const handleOtherValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setFormValues({
      ...props.formValues,
      [props.label]: e.target.value,
    });
  };

  return (
    <>
      <div className='mb-3'>
        <label>{props.label}</label>
        <Select
          value={value}
          options={props.options}
          handleChange={(option: any) => {
            setValue(option);

            props.setFormValues &&
              props.setFormValues({
                ...props.formValues,
                [props.label]: option.name,
              });
          }}
        />
      </div>
      {value && value.name === 'Other' && (
        <input
          onChange={handleOtherValueChange}
          className='w-full border rounded p-2 mb-3'
        />
      )}
      {children &&
        children.map((child: any) => (
          <Property
            key={child.id}
            label={child.name}
            options={child?.options}
            setFormValues={props.setFormValues}
            formValues={props.formValues}
          />
        ))}
    </>
  );
}
