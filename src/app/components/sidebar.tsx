'use client';

import { Separator } from '@/components/ui/separator';
import Logo from './logo';
import { sidebarMenu } from '@/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className='hidden w-[230px] h-screen border-r fixed left-0 top-0 z-30 px-6 py-5 bg-white sm:block'>
      <div className='w-full flex justify-center items-center mb-3'>
        <Logo />
      </div>
      <Separator />
      <div className='mt-6 flex flex-col gap-3'>
        {sidebarMenu.map((menu) => {
          return (
            <aside key={menu.label} className='text-[15px]'>
              <Link
                href={menu.path}
                className={cn(
                  'px-3 py-2 flex items-center gap-3 capitalize text-[#6B7772] transition-all',
                  pathname === menu.path
                    ? 'bg-secondary text-primary font-semibold rounded-[8px] border-r-2 border-r-primary'
                    : ''
                )}
              >
                <Image
                  src={pathname === menu.path ? menu.iconActive : menu.icon}
                  alt='Icon'
                />
                {menu.label}
              </Link>
            </aside>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
