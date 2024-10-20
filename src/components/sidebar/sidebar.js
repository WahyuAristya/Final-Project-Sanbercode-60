import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Sidebar = () => {
  const location = useLocation(); // Ambil lokasi saat ini

  return (
    <div className="fixed top-0 left-0 h-screen bg-whiteSecondary text-black font-sans font-regular font-[18px] flex flex-col z-50">
      {/* Logo / Brand */}
      <Link to='/'> {/* Tambahkan Link di sini */}
            <img src={logo} alt="Logo" className="cursor-pointer mt-[30px] mx-[23px] w-[157px] h-[43px] mb-[40px]" />
      </Link>

      {/* Sidebar Links */}
      <nav className="mt-2 flex flex-col gap-4">
        <Link
          to="/dashboard"
          className={`pl-6 py-2 font-sans font-regular text-[18px] transition-colors ${location.pathname === '/dashboard' ? 'bg-primary text-white' : 'hover:border-primary'}`}
        >
          Dashboard
        </Link>

        <Link
          to="/dashboard/list-data-table"
          className={`pl-6 py-2 font-sans font-regular text-[18px] transition-colors ${location.pathname === '/dashboard/list-data-table' ? 'bg-primary text-white' : 'hover:border-primary'}`}
        >
          List Data Table
        </Link>

        <Link
          to="/dashboard/list-data-table/create"
          className={`pl-6 py-2 font-sans font-regular text-[18px] transition-colors ${location.pathname === '/dashboard/list-data-table/create' ? 'bg-primary text-white' : 'hover:border-primary'}`}
        >
          Data Form
        </Link>

        <Link
          to="/dashboard/edit-profile"
          className={`pl-6 py-2 font-sans font-regular text-[18px] transition-colors ${location.pathname === '/dashboard/edit-profile' ? 'bg-primary text-white' : 'hover:border-primary'}`}
        >
          Profile
        </Link>

        <Link
          to="/dashboard/change-password"
          className={`pl-6 py-2 font-sans font-regular text-[18px] transition-colors ${location.pathname === '/dashboard/change-password' ? 'bg-primary text-white' : 'hover:border-primary'}`}
        >
          Change Password
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
