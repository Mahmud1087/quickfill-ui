import notification from '~/notification.png';
import helpCircle from '~/help-circle.png';
import Image from 'next/image';
import UserDropdown from './user-dropdown';

const Navbar = () => {
  return (
    <nav className='bg-white px-7 py-5 border-b'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-base'>Welcome back!</h1>
        <section className='flex items-center gap-5'>
          <div className='bg-[#09251A0F] rounded-full w-8 h-8 flex items-center justify-center'>
            <div>
              <Image src={notification} alt='notification bell iconn' />
            </div>
          </div>
          <div className='bg-[#09251A0F] rounded-full w-8 h-8 flex items-center justify-center'>
            <div>
              <Image src={helpCircle} alt='notification bell iconn' />
            </div>
          </div>
          <UserDropdown />
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
