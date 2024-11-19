import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { recentTransactions } from '@/data';
import { cn } from '@/lib/utils';

const RecentTransactions = () => {
  return (
    <div className='w-[65%] h-full rounded-xl border bg-white pt-4'>
      <header className='flex items-center justify-between mb-3 px-6'>
        <h1 className='font-bold text-[15px] text-[#09251A]'>
          Purchase Report
        </h1>
      </header>
      <Separator />
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
    </div>
  );
};
export default RecentTransactions;
