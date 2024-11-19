import Image from 'next/image';
import logo from '~/logo-whitebg.png';

const Logo = () => {
  return (
    <div className=''>
      <Image src={logo} alt='Logo image' />
    </div>
  );
};
export default Logo;
