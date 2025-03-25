import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from '@/Components/Shared/Types';
import Button from '@/Components/UI/Button';

type Props = {
  setIsLoggedIn: (value: boolean) => void;
  setUserType: (value: UserType | null) => void;
};

const AdminLogin = ({ setIsLoggedIn, setUserType }: Props) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: 'admin123@gmail.com',
    password: 'Admin@123',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUserType(UserType.Admin);
    navigate('/admin-dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your admin credentials
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-primary"
                placeholder="Admin Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-primary"
                placeholder="Admin Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
          </div>

          <Button className="w-full py-2">Sign in as Admin</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;