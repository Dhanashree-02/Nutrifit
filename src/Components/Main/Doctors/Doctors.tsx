import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <h3 className="text-4xl font-bold text-center mb-20">
        {DoctorsData.heading}
      </h3>
      <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0">
        {DoctorsData.doctors.map((doctor, index) => (
          <Doctor key={index} doc={doctor} />
        ))}
      </div>
      <h4 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {DoctorsData.heading2}
      </h4>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg text-justify">
        {DoctorsData.desc}
      </div>
      <img className="m-auto w-full max-w-[350px] h-auto"  src={DoctorsData.img} alt="About NutriFit"/>
    </SectionWrapper>
  );
};

export default Doctors;
