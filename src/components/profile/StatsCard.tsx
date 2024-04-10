import Image from 'next/image';

interface StatsCardProps {
  icon: string;
  value: number;
  subValue?: number;
  label: string;
}

export default function StatsCard(props: StatsCardProps) {
  return (
    <div className='flex items-center gap-2 bg-yellow2 rounded-[18px] p-1 md:p-4'>
      <div className='md:w-6 w-4'>
        <Image src={props.icon} alt='Logo' width={24} height={24} />
      </div>
      <div className='flex-col'>
        <div className='font-bold text-sm'>
          {props.value}{' '}
          {props.subValue && (
            <span className='text-gray font-normal text-xs'>
              ({props.subValue})
            </span>
          )}
        </div>
        <div className='text-orange text-xs'>{props.label}</div>
      </div>
    </div>
  );
}
