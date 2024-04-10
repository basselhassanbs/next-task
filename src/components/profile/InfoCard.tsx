import Image from 'next/image';
import StatsCard from './StatsCard';

export default function InfoCard() {
  return (
    <div className='flex flex-col gap-4 rounded-[21px] bg-white p-4 md:p-6'>
      <Image
        className='h-24 w-24 rounded-3xl'
        width={100}
        height={100}
        src='https://images.unsplash.com/photo-1574297500578-afae55026ff3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='avatar'
      />
      <h1 className='text-1xl font-bold text-black'>Hala Ahmed</h1>
      <p className='text-sm text-gray4'>
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
      <div className='flex xl:gap-4 gap-2'>
        <div className='flex-1'>
          <StatsCard value={5} label='Following' icon='/user-tick.png' />
        </div>
        <div className='flex-1'>
          <StatsCard value={20} label='Followers' icon='/profile-2user.png' />
        </div>
        <div className='flex-1'>
          <StatsCard
            value={4.2}
            subValue={15}
            label='Rate'
            icon='/magic-star.png'
          />
        </div>
      </div>
      <button className='flex w-full justify-center items-center py-3 rounded-[14px] text-white font-bold text-sm bg-gradient-to-r from-red to-orange'>
        Follow
      </button>
    </div>
  );
}
