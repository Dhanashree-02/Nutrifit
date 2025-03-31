import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import UserLogin from './Components/Auth/UserLogin';
import AdminLogin from './Components/Auth/AdminLogin';
import { UserType } from './Components/Shared/Types';
import UserDashboard from './Components/Dashboard/UserDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<UserType | null>(null);

  return (
    <div className="text-[#1d4d85] app min-w-[280px] min-h-screen bg-background">
      <Header 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
        userType={userType} 
        setUserType={setUserType} 
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route 
          path="/user-login" 
          element={
            <UserLogin 
              setIsLoggedIn={setIsLoggedIn} 
              setUserType={setUserType} 
            />
          } 
        />
        <Route 
          path="/admin-login" 
          element={
            <AdminLogin 
              setIsLoggedIn={setIsLoggedIn} 
              setUserType={setUserType} 
            />
          } 
        />
        <Route 
          path="/user-dashboard" 
          element={
            isLoggedIn && userType === UserType.User ? (
              <UserDashboard />
            ) : (
              <Navigate to="/user-login" replace />
            )
          } 
        />
        <Route 
          path="/admin-dashboard" 
          element={
            isLoggedIn && userType === UserType.Admin ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin-login" replace />
            )
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
