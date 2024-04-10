'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function QRCard() {
  const [isCardOpen, SetIsCardOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        SetIsCardOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='flex flex-col gap-4 bg-white rounded-[21px] p-4 md:p-6'>
      <div className='flex justify-between items-center '>
        <h1 className='text-2xl font-bold text-black'>QR Code</h1>
        <div className='flex gap-4'>
          <button>
            <Image src='/eye.png' alt='eye' width={24} height={24} />
          </button>
          <button>
            <Image
              src='/send-square.png'
              alt='send-square'
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image
              src='/document-download.png'
              alt='document-download'
              width={24}
              height={24}
            />
          </button>
          <button
            className='md:hidden'
            onClick={() => {
              SetIsCardOpen(!isCardOpen);
            }}
          >
            <Image
              src={`/arrow-${isCardOpen ? 'up' : 'down'}.png`}
              alt='document-download'
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      {isCardOpen && (
        <>
          <div className='flex items-center gap-2 bg-yellow2 p-5 rounded-[18px]'>
            <button>
              <Image
                src='/document-orange.png'
                alt='document-download'
                width={20}
                height={20}
              />
            </button>
            <p className='text-xs'>
              Download the QR code or share it with your friends.
            </p>
          </div>

          <div className='bg-gradient-to-r from-red to-orange p-5 rounded-[20px]'>
            <div className='flex flex-col justify-center items-center bg-white rounded-[18px] md:p-2'>
              <div className='mb-2'>
                <Image src='/logo2.png' alt='Logo' width={160} height={100} />
              </div>
              <h1 className='text-2xl font-bold text-gray3'>Hala Ahmed</h1>
              <Image src='/QR.png' alt='Logo' width={135} height={135} />
              <p className='text-gray3'>Follow Us on Mazaady</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
