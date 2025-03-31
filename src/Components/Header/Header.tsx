import Logo from '@/assets/Images/nutrifit.png';
import { SelectedPage, UserType } from '@/Components/Shared/Types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import NavBar from './NavBar';

type Props = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  userType: UserType | null;
  setUserType: Dispatch<SetStateAction<UserType | null>>;
};

const Header = ({ isLoggedIn, setIsLoggedIn, userType, setUserType }: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${flexBetween} ${
        isTopOfPage ? '' : 'bg-[#84ceff]'
      } transition fixed top-0 z-30 w-full p-5 md:px-16`}
    >
      <img className="w-10 sm:w-60" src={Logo} alt="Logo" />
      <NavBar
        flexBetween={flexBetween}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userType={userType}
        setUserType={setUserType}
      />
    </div>
  );
};

export default Header;
