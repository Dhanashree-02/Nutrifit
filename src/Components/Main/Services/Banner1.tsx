import { Banner1Data } from '@/Components/Shared/Consts';
import ListItem from './ListItem';

const Banner1 = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20">
      <div className="max-w-xs md:max-w-md">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {Banner1Data.heading}
        </h3>
        <ul className="text-sm md:ml-5 gap-2 md:gap-5 flex flex-col">
          {Banner1Data.texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <div className="bg-[#9ae7ff] shadow-xl rounded-2xl p-10 pb-10 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] overflow-hidden">
        <img 
          src={Banner1Data.img} 
          alt="Nutrition Consultation"
          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300" 
        />
      </div>
    </div>
  );
};

export default Banner1;
