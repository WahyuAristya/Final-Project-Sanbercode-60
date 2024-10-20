import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo/logo.png';
import Button from '../button';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Cookies from 'js-cookie';
import { FaAngleDown } from 'react-icons/fa'; // Import icon panah

const Navbar = ({ isDashboard }) => {
  const location = useLocation(); // Dapatkan lokasi saat ini
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;
  const [isOpen, setIsOpen] = useState(false); // State untuk mengatur tampilan overlay
  const menuRef = useRef(null); // Reference untuk menu overlay

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle menu
  };

  const handleLogout = () => {
    Cookies.remove('user'); // Hapus user dari cookies
    Cookies.remove('token');
    window.location.reload(); // Reload halaman setelah logout
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-whiteSecondary h-[90px] flex sticky top-0 z-50'>
      <div className='mx-[80px] flex items-center w-full'>
        {!isDashboard && (
          <Link to='/'> {/* Tambahkan Link di sini */}
            <img src={logo} alt="Logo" className="cursor-pointer" /> {/* Tambahkan cursor-pointer */}
          </Link>
        )}
        {!isDashboard && (
          <>
            <Link to='/'>
              <p className={`font-sans font-regular ml-[130px] ${location.pathname === '/' ? 'border-b-2 border-primary font-bold' : ''}`}>Beranda</p>
            </Link>
            <Link to='/lowongan'>
              <p className={`font-sans font-regular ml-[70px] ${location.pathname === '/lowongan' ? 'border-b-2 border-primary font-bold' : ''}`}>Lowongan</p>
            </Link>
          </>
        )}

        <div className='ml-auto flex items-center space-x-4 relative' ref={menuRef}>
          {user ? (
            <div className='flex items-center'>
              <img 
                src={user.image_url || 'default-profile.png'}
                alt="Profile"
                className='w-10 h-10 object-cover rounded-full cursor-pointer'
                onClick={toggleMenu}
              />
              <p onClick={toggleMenu} className='font-sans font-semibold cursor-pointer ml-2 mr-5'>{user.name}</p>
              <FaAngleDown  
                className='text-blue-500 cursor-pointer' 
                onClick={toggleMenu} 
              />
            </div>
          ) : (
            <>
              <Link to='/login'>
                <Button variant='secondary'>MASUK</Button>
              </Link>
              <Link to='/register'>
                <Button variant='primary'>DAFTAR</Button>
              </Link>
            </>
          )}

          {/* Overlay Menu */}
          {isOpen && user && (
            <div className='absolute right-0 top-10 mt-2 w-48 bg-white shadow-md rounded-md z-50'>
              <Link to='/dashboard/edit-profile'>
                <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>My Profile</p>
              </Link>
              <Link to='/dashboard'>
                <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Dashboard</p>
              </Link>
              <Link to='/settings'>
                <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Settings</p>
              </Link>
              <p 
                className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                onClick={handleLogout} // Logout ketika diklik
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
