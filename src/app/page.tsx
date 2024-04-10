import Form from '@/components/Form';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='p-8 text-red'>
        <Link href='/profile'>Profile</Link>
      </div>
      <div className='container mx-auto px-40'>
        <Form />
      </div>
    </>
  );
}
