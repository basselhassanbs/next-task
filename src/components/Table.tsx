// 'use client';

export default function Table(props: any) {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Key
            </th>
            <th scope='col' className='px-6 py-3'>
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.data).map(([key, value]) => (
            <tr
              key={key}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
            >
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {key}
              </th>
              <td className='px-6 py-4'>{value as String}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
