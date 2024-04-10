import Button from '@/components/profile/Button';
import InfoCard from '@/components/profile/InfoCard';
import Navbar from '@/components/profile/Navbar';
import ProductsList from '@/components/profile/ProductsList';
import QRCard from '@/components/profile/QRCard';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className=''>
      <Navbar />
      <div className='pt-28 lg:px-10 px-2 xl:flex-nowrap flex flex-wrap gap-4 bg-lightGray'>
        <div className='flex flex-col gap-4 w-full xl:w-1/3'>
          <InfoCard />
          <QRCard />
        </div>

        <div className='w-full xl:w-2/3'>
          <ProductsList />
        </div>
        <div className='fixed top-[55%] right-0 md:hidden'>
          <Button>
            <Image
              src='/add-circle.png'
              alt='add-circle'
              width={22}
              height={22}
              className='mt-1'
            />
            Add Review
          </Button>
        </div>
      </div>
    </div>
  );
}
