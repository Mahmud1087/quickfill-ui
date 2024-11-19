import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { CiLogout } from 'react-icons/ci';
import { GoChevronDown } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import dangoteLogo from '~/dangote-small-logo.png';
const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <aside className='flex items-center gap-2'>
          <div>
            <Image src={dangoteLogo} alt='Dangote logo' />
          </div>
          <p className='text-sm text-[#09251A]'>Dangote</p>
          <GoChevronDown />
        </aside>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[212px] mt-8 mr-5'>
        <DropdownMenuItem>
          <div className='flex items-center text-base font-medium gap-2'>
            <IoSettingsOutline className='font-semibold' />
            <Button
              variant={'ghost'}
              className='font-normal px-0 hover:bg-transparent'
            >
              Settings
            </Button>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className='flex items-center gap-2 text-base font-medium'>
            <CiLogout className='rotate-180 font-semibold' />
            <Button
              variant={'ghost'}
              className='font-normal px-0 hover:bg-transparent'
            >
              Logout
            </Button>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;
