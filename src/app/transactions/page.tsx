'use client';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useState } from 'react';
import TransactionFilter from '../components/transaction-filter';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { recentTransactions } from '@/data';

const Transactions = () => {
  const [tab, setTab] = useState('Purchase');

  return (
    <div className='px-14 py-9'>
      <header className='mb-6'>
        <h1 className='font-bold text-xl mb-1'>Transactions</h1>
        <p className='text-sm text-[#6B7772]'>
          Manage all the businesses on your portfolio here
        </p>
      </header>
      <div className='flex items-center relative w-full after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 mb-4'>
        <aside
          onClick={() => setTab('Purchase')}
          className={cn(
            'text-sm font-medium text-[#6B7772] pl-3 pr-5 py-2 relative z-30 cursor-pointer transition-all border-b-2',
            {
              'text-primary border-b-primary': tab === 'Purchase',
            }
          )}
        >
          Purchase
        </aside>
        <aside
          className={cn(
            'text-sm font-medium text-[#6B7772] pl-3 pr-5 py-2 relative z-30 cursor-pointer transition-all border-b-2',
            {
              'text-primary border-b-primary': tab === 'Card Funding',
            }
          )}
          onClick={() => setTab('Card Funding')}
        >
          Cards Funding
        </aside>
      </div>

      <section className='p-3 bg-white rounded-xl'>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='search'
            className='w-64 px-2 py-1 flex gap-2 items-center border rounded-md'
          >
            <Search size={18} color='#6B7772' />
            <input
              type='search'
              name='search'
              placeholder='Search'
              className='bg-transparent border-none focus:border-none focus:outline-none text-sm'
            />
          </label>
          <TransactionFilter />
        </div>
        <section>
          <Table>
            <TableHeader className='bg-[#68746f0f] text-xs'>
              <TableRow>
                <TableHead className='pl-6'>DATE</TableHead>
                <TableHead>TRANSACTION TYPE</TableHead>
                <TableHead>COMPANY</TableHead>
                <TableHead className=''>AMOUNT</TableHead>
                <TableHead className='text-right pr-6'>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction, i) => {
                return (
                  <TableRow key={i} className=''>
                    <TableCell className='text-[#6B7772] text-[13px] pl-6 py-3'>
                      {transaction.date}
                    </TableCell>
                    <TableCell className='font-medium text-[13px]'>
                      {transaction.type}
                    </TableCell>
                    <TableCell className='text-[#6B7772] text-[13px]'>
                      {transaction.company}
                    </TableCell>
                    <TableCell className='font-medium text-[13px]'>
                      &#8358;{transaction.amount}
                    </TableCell>
                    <TableCell className={cn('text-right pr-6 text-[13px]')}>
                      <span
                        className={cn('px-2 py-1 rounded-full', {
                          'bg-pending text-pending-foreground':
                            transaction.status === 'pending',
                          'bg-success text-success-foreground':
                            transaction.status === 'success',
                        })}
                      >
                        {transaction.status}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </section>
      </section>
    </div>
  );
};
export default Transactions;
