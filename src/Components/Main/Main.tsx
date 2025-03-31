import Home from '@/Components/Main/Home/Home';
import Doctors from './Doctors/Doctors';
import Reviews from './Review/Reviews';
import Services from './Services/Services';

const Main = () => {
  return (
    <div className="m-auto max-w-[1250px] px-5 md:px-16">
      <Home />
      <Doctors />
      <Services />
      <Reviews />
    </div>
  );
};

export default Main;
