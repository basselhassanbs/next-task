import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='fixed z-10 container bg-white mx-auto px-10 h-20'>
      <div className='flex justify-between'>
        <div className='flex items-end gap-4'>
          <div className='md:hidden'>
            <button className='outline-none mobile-menu-button pb-4'>
              <Image src='/menu.png' alt='menu' width={24} height={24} />
            </button>
          </div>
          <a href='#' className='pb-4'>
            <Image src='/logo.png' alt='Logo' width={100} height={10} />
          </a>
          <div className='hidden md:block'>
            <ul className='flex h-full'>
              <li className='-mb-px mr-1'>
                <a
                  className='bg-white inline-block py-2 text-red font-bold pb-4'
                  href='#'
                >
                  Home
                </a>
                <div className='border-4 rounded-tr-3xl rounded-tl-3xl border-red'></div>
              </li>
              <li className='mr-1'>
                <a
                  className='bg-white inline-block py-2 px-4 text-gray pb-4'
                  href='#'
                >
                  Blog
                </a>
              </li>
              <li className='mr-1'>
                <a
                  className='bg-white inline-block py-2 px-4 text-gray pb-4'
                  href='#'
                >
                  Gifts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-6 py-4'>
          <div className='flex gap-2'>
            <button className=''>
              <Image src='/search.png' alt='Logo' width={22} height={22} />
            </button>
            <div className='border-l-[1px] border-yellow' />
            <button className=''>
              <Image
                src='/notification.png'
                alt='Logo'
                width={22}
                height={22}
              />
            </button>
            <div className='border-l-[1px] border-yellow' />
            <Image
              className='h-10 w-10 rounded-full'
              width={200}
              height={200}
              src='https://images.unsplash.com/photo-1574297500578-afae55026ff3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='avatar'
            />
          </div>
          <div className='hidden md:block'>
            <button className='flex items-center p-2 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-red to-orange'>
              <Image
                src='/add-circle.png'
                alt='add-circle'
                width={22}
                height={22}
                className='mt-1 '
              />
              Add New Product
            </button>
          </div>
          <div className='hidden md:block'>
            <div className='flex gap-2 h-5'>
              <button className=''>
                <Image src='/global.png' alt='Logo' width={22} height={22} />
              </button>
              <div className='border-l-[1px] border-gray2' />
              <button>EN</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
