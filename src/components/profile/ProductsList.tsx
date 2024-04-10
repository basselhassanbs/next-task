import Image from 'next/image';
import ProductCard from './ProductCard';
import Button from './Button';

const products = [
  {
    title: 'Six-piece clothing set (blouse - pants - hat and ...',
    price: '1000 EGP',
    like: false,
    image:
      'https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Six-piece clothing set (blouse - pants - hat and ...',
    price: '1000 EGP',
    like: false,
    image:
      'https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Jeep Car, new, used for only one time',
    price: '1000 EGP',
    like: true,
    image:
      'https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Six-piece clothing set (blouse - pants - hat and ...',
    price: '1000 EGP',
    like: false,
    image:
      'https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Jeep Car, new, used for only one time',
    price: '1000 EGP',
    like: true,
    image:
      'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function ProductsList() {
  return (
    <div className='flex flex-col gap-6 bg-white p-4 md:p-6 rounded-[21px]'>
      <div className='md:flex justify-between items-center'>
        <div className='flex gap-2 justify-evenly'>
          <button className='grow rounded-xl px-1 md:px-5 py-1 border border-orange text-orange bg-yellow2'>
            Products
          </button>
          <button className='grow rounded-xl px-1 md:px-5 py-1 border border-gray2 text-gray'>
            Articles
          </button>
          <button className='grow rounded-xl px-1 md:px-5 py-1 border border-gray2 text-gray'>
            Reviews
          </button>
        </div>
        <div className='hidden md:block'>
          <Button>
            <Image
              src='/add-circle.png'
              alt='add-circle'
              width={22}
              height={22}
              className='mt-1 '
            />
            Add Review
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <div>
          <h1 className='md:text-3xl text-2xl font-bold text-gray3'>
            Products <span className='font-normal text-sm text-gray'>(12)</span>
          </h1>
        </div>
      </div>

      {products.map((product, index) => (
        <ProductCard
          key={'' + index}
          title={product.title}
          price={product.price}
          image={product.image}
          like={product.like}
        />
      ))}
    </div>
  );
}
