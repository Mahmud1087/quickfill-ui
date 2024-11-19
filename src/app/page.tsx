import { analyticsCardData } from '@/data';
import TopCards from './components/top-cards';
import PurchaseSection from './components/purchase-section';
import RecentTransactions from './components/recent-transactions';
import Activity from './components/activity';

const Home = () => {
  return (
    <div className='px-7 pt-5'>
      <section className='grid grid-cols-4 gap-3'>
        {analyticsCardData.map((data) => {
          return <TopCards key={data.label} {...data} />;
        })}
      </section>

      <PurchaseSection />

      <section className='flex gap-4 my-4'>
        <RecentTransactions />
        <Activity />
      </section>
    </div>
  );
};
export default Home;
