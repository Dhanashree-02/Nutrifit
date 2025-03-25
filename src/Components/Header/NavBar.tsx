import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { SelectedPage, UserType } from '@/Components/Shared/Types';
import { useState, useRef, useEffect } from 'react';
import useMediaQuery from '@/Hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import Links from './Links';
import Button from '../UI/Button';

type Props = {
  flexBetween: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userType: UserType | null;
  setUserType: (value: UserType | null) => void;
};

const NavBar = ({ 
  flexBetween, 
  selectedPage, 
  setSelectedPage,
  isLoggedIn,
  setIsLoggedIn,
  userType,
  setUserType 
}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setShowLoginDropdown(false);
  };

  const handleMenuToggle = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav>
      {isAboveMediumScreens ? (
        <div className={`${flexBetween} lg:gap-28 gap-20`}>
          <div className={`${flexBetween} gap-16`}>
            <Links
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="relative" ref={dropdownRef}>
            {!isLoggedIn ? (
              <>
                <Button onClick={() => setShowLoginDropdown(!showLoginDropdown)}>
                  Login {showLoginDropdown ? '▲' : '▼'}
                </Button>
                {showLoginDropdown && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <Link 
                        to="/user-login" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        User Login
                      </Link>
                      <Link 
                        to="/admin-login" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        Admin Login
                      </Link>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Button onClick={handleLogout}>
                Logout ({userType})
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={handleMenuToggle}>
            <Bars3Icon className="h-8 w-8" />
          </button>
          {isMenuToggled && (
            <div className="fixed right-0 top-0 z-40 h-auto rounded-es-3xl w-[175px] md:w-[300px] bg-secondary drop-shadow-2xl">
              <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
                <button onClick={handleMenuToggle}>
                  <XMarkIcon className="h-10 w-10" />
                </button>
              </div>
              <div className="ml-[20%] flex flex-col items-start gap-5 text-2xl pb-8">
                <Links
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <div className="flex flex-col gap-2 w-full pr-8">
                  {!isLoggedIn ? (
                    <>
                      <Link 
                        to="/user-login" 
                        className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-[#158ace] text-center"
                        onClick={handleMenuToggle}
                      >
                        User Login
                      </Link>
                      <Link 
                        to="/admin-login" 
                        className="bg-secondary-500 text-white px-4 py-2 rounded-md text-sm hover:bg-secondary-600 text-center"
                        onClick={handleMenuToggle}
                      >
                        Admin Login
                      </Link>
                    </>
                  ) : (
                    <button 
                      onClick={handleLogout}
                      className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-[#158ace] text-center"
                    >
                      Logout ({userType})
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
