import InfoCard from '@/components/profile/InfoCard';
import Navbar from '@/components/profile/Navbar';
import ProductsList from '@/components/profile/ProductsList';
import QRCard from '@/components/profile/QRCard';

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
      </div>
    </div>
  );
}
