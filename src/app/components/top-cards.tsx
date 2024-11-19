import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface TopCardsProps {
  label: string;
  value: string;
  icon: StaticImageData;
  isFirstChild: boolean;
}

const TopCards = ({ icon, label, value, isFirstChild }: TopCardsProps) => {
  return (
    <div className='bg-white border rounded-xl px-6 py-5 first:bg-primary first:text-white'>
      <aside className='flex items-center justify-center'>
        <section className='w-full flex items-center gap-3 h-full'>
          <div
            className={cn(
              'w-12 h-12 rounded-full bg-[#DFFFF1] flex items-center justify-center',
              {
                'bg-white/15': isFirstChild,
              }
            )}
          >
            <aside
              className={cn('w-5 h-5', {
                'w-7 h-7': isFirstChild,
              })}
            >
              <Image src={icon} alt={label} className='w-full h-full' />
            </aside>
          </div>
          <section className='flex flex-col gap-1'>
            <h3
              className={cn('font-medium text-sm text-[#6B7772]', {
                'text-white font-normal': isFirstChild,
              })}
            >
              {label}
            </h3>
            <h1
              className={cn(
                'font-bold text-xl leading-[29.05px] tracking-[-2.2%] flex items-center',
                {
                  'font-medium': isFirstChild,
                }
              )}
            >
              {label === 'Balance' && <p>&#8358;</p>}
              {value}
            </h1>
          </section>
        </section>
      </aside>
    </div>
  );
};
export default TopCards;
