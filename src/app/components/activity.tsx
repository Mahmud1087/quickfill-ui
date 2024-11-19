import { Separator } from '@/components/ui/separator';
import { activityData } from '@/data';
import Image from 'next/image';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoFlashOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import avatar from '~/Avatar.png';

const Activity = () => {
  return (
    <div className='w-[35%] h-full bg-white rounded-xl border pt-4 pb-2'>
      <header className='flex items-center justify-between mb-3 px-6'>
        <h1 className='font-bold text-[15px] text-[#09251A]'>Activity</h1>
        <HiOutlineDotsVertical
          color='#979797'
          className='cursor-pointer text-lg'
        />
      </header>
      <Separator />
      <section className='mt-1 flex flex-col'>
        {activityData.map((item) => {
          return (
            <div
              key={item.title}
              className='flex items-center justify-between border-b last:border-b-0 py-[13px]'
            >
              <aside className='flex gap-3 px-6'>
                <div className='h-8 w-8'>
                  <Image
                    src={avatar}
                    alt='User avatar'
                    className='w-full h-full'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='font-medium text-xs text-[#09251a]'>
                    {item.title}
                  </h1>
                  <aside className='flex items-center'>
                    <IoFlashOutline className='mr-1 text-sm' color='#6B7772' />
                    <p className='text-xs text-[#6b7772]'>{item.subtitle}</p>
                    <LuDot color='#6B7772' />
                    <p className='text-xs text-[#6b7772]'>{item.timeDate}</p>
                  </aside>
                </div>
              </aside>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Activity;
