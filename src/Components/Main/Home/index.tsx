import Services from '@/Components/Main/Services/Services';
import Banner1 from '@/Components/Main/Services/Banner1';
import Doctors from '@/Components/Main/Doctors/Doctors';
import Reviews from '@/Components/Main/Review/Reviews';

const Home = () => {
  return (
    <main className="pt-20">
      <Services />
      <Banner1 />
      <Doctors />
      <Reviews />
    </main>
  );
};

export default Home;