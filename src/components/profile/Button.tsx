import { ReactNode } from 'react';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button className='flex items-center p-2 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-red to-orange'>
      {props.children}
    </button>
  );
}
