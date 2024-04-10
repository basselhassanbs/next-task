'use client';
import { FormEvent, useEffect, useState } from 'react';
import Select from './Select';
import { getAllCategories, getCategoryProperties } from '@/services/data';
import Property from './Property';
import Table from './Table';
import { Category, MainCategory, IProperty } from '@/types';

export default function Form() {
  const [mainCategory, setMainCategory] = useState<MainCategory>();
  const [subCategory, setSubCategory] = useState<Category | null>(null);
  const [mainCategories, setMainCategories] = useState([]);
  const [properties, setProperties] = useState<IProperty[]>([]);

  const [showTable, setShowTable] = useState(false);

  const [values, setValues] = useState({});
  const [tableData, setTableData] = useState({});

  async function fetchCategoriesData() {
    const res = await getAllCategories();
    setMainCategories(res.data.data.categories);
  }

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const handleMainCategoryChange = (option: any) => {
    setMainCategory(option);
    setSubCategory(null);
    setProperties([]);
    setValues({
      'Main category': option?.name,
    });
  };

  const handleSubCategoryChange = async (option: any) => {
    setSubCategory(option);
    const res = await getCategoryProperties(option?.id);
    setProperties([
      ...res.data.data.map((property: any) => ({
        ...property,
        options: [...property.options, { name: 'Other' }],
      })),
    ]);
    setValues({
      'Main category': mainCategory?.name,
      'Sub category': option?.name,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTableData({
      ...values,
    });
    setShowTable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-3'>
        <div data-testid='main-category'>
          <label>Main category</label>
          <Select
            value={mainCategory}
            options={mainCategories}
            handleChange={handleMainCategoryChange}
          />
        </div>
        <div data-testid='sub-category'>
          <label>Sub category</label>
          <Select
            value={subCategory}
            options={mainCategory?.children}
            handleChange={handleSubCategoryChange}
          />
        </div>
        <div>
          {properties.map((property: any) => (
            <Property
              key={property.id}
              label={property.name}
              setFormValues={setValues}
              formValues={values}
              options={property.options}
            />
          ))}
        </div>
        <button
          data-testid='submit'
          type='submit'
          className='rounded bg-blue-200 p-2 max-w-20'
        >
          Submit
        </button>
        {showTable && <Table data={tableData} />}
      </div>
    </form>
  );
}
