import { Separator } from '@/components/ui/separator';
import { topPurchases } from '@/data';
import Image from 'next/image';
import { GoChevronDown } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import graph from '~/line-graph.png';
import avatar from '~/Avatar.png';

const PurchaseSection = () => {
  return (
    <section className='flex gap-4 mt-6'>
      <div className='w-[65%] h-[380px] bg-white rounded-xl border py-4 px-6'>
        <header className='flex items-center justify-between mb-3'>
          <h1 className='font-bold text-[15px] text-[#09251A]'>
            Purchase Report
          </h1>
          <aside className='flex items-center gap-2 cursor-pointer px-3 py-1 text-[#6B7772] text-[13px] border rounded-md'>
            <p>Last 30 Days</p>
            <GoChevronDown size={16} />
          </aside>
        </header>
        <Separator />
        <aside className='mt-6'>
          <Image src={graph} alt='line graph' />
        </aside>
      </div>

      <div className='w-[35%] h-[380px] bg-white rounded-xl border pb-4 pt-6'>
        <header className='flex items-center justify-between mb-3 px-6'>
          <h1 className='font-bold text-[15px] text-[#09251A]'>
            Top Purchases
          </h1>
          <HiOutlineDotsVertical
            color='#979797'
            className='cursor-pointer text-lg'
          />
        </header>
        <Separator />

        <section className='mt-1 flex flex-col'>
          {topPurchases.map((item) => {
            return (
              <div
                key={item.name}
                className='flex items-center justify-between border-b last:border-b-0 py-[14px]'
              >
                <aside className='flex gap-3 px-6'>
                  <div>
                    <Image src={avatar} alt='User avatar' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h1 className='font-medium text-sm text-[#09251a]'>
                      {item.name}
                    </h1>
                    <p className='text-xs text-[#6b7772]'>{item.location}</p>
                  </div>
                </aside>
                <p className='font-medium text-sm text-[#09251a] mr-6'>
                  &#8358;{item.amount}
                </p>
              </div>
            );
          })}
        </section>
        <section className='w-full flex justify-center items-center'>
          <aside className='flex gap-1'>
            <div className='w-[6px] h-[6px] rounded-full bg-primary'></div>
            <div className='w-[6px] h-[6px] rounded-full bg-primary/20'></div>
            <div className='w-[6px] h-[6px] rounded-full bg-primary/20'></div>
          </aside>
        </section>
      </div>
    </section>
  );
};
export default PurchaseSection;
