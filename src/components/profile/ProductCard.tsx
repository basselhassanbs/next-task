import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  like: boolean;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className='relative'>
      <div className='flex gap-4'>
        <div>
          <div className='relative md:h-[127px] md:w-[145px] h-[72px] w-[87px]'>
            <Image
              className=' md:rounded-[28px] rounded-[15px]'
              fill
              src={props.image}
              alt='avatar'
            />
            <div className='absolute bottom-0 right-0 bg-red text-white text-[6px] md:text-xs px-2 py-1 md:px-4 md:py-2 md:rounded-br-[28px] md:rounded-tl-[28px] rounded-br-[15px] rounded-tl-[15px]'>
              Live auction
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 md:gap-2'>
          <p className='text-ellipsis overflow-hidden text-xs md:text-lg'>
            {props.title}
          </p>

          <p className='text-gray text-xs md:text-lg'>
            starting price{' '}
            <strong className='md:text-2xl font-bold text-black'>
              {props.price}
            </strong>
          </p>

          <div className='flex items-center gap-2 flex-wrap xl:flex-nowrap'>
            <div>
              <p className='text-gray text-xs md:text-lg'>Lot Starts In</p>
            </div>
            <div className='flex gap-1 md:gap-2'>
              <button className='font-bold text-xs md:text-xl rounded-3xl px-1 py-1 md:px-6 md:py-2 bg-yellow2 text-orange'>
                2 <span className='text-[8px] md:text-xs'>Days</span>
              </button>
              <button className='font-bold text-xs md:text-xl rounded-3xl px-1 py-1 md:px-6 md:py-2 bg-yellow2 text-orange'>
                10 <span className='text-[8px] md:text-xs'>Hours</span>
              </button>
              <button className='font-bold text-xs md:text-xl rounded-3xl px-1 py-1 md:px-6 md:py-2 bg-yellow2 text-orange'>
                50 <span className='text-[8px] md:text-xs'>Minutes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className='absolute top-2 left-2 md:left-auto md:right-0 p-1 bg-white rounded-full'>
        <Image
          src={props.like ? '/filled-heart.png' : '/heart.png'}
          alt='heart'
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
