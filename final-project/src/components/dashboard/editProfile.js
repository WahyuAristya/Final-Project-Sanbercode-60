import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Mengambil token dari cookies

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    image_url: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const token = Cookies.get('token'); // Ambil token dari cookies

  // Fungsi untuk mengekstrak user_id dari token JWT
  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = JSON.parse(window.atob(base64));
      return decodedPayload;
    } catch (error) {
      console.error('Error parsing JWT', error); // Log error jika ada
      return null;
    }
  };

  // Ambil user_id dari token
  const userId = parseJwt(token)?.id;
  console.log(userId);

  // Fungsi untuk mengambil data profil user
  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `https://final-project-api-alpha.vercel.app/api/auth/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('Profile data fetched:', response.data);

      // Mengatur state profile dengan data yang diambil dari API
      setProfile({
        name: response.data.name,
        image_url: response.data.image_url,
        email: response.data.email,
        password: '',
        confirm_password: ''
      });
    } catch (error) {
      console.error('Error fetching profile data', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchProfile(); // Panggil API untuk mengambil data user saat halaman pertama kali dimuat
    }
  }, [userId]);

  // Fungsi untuk mengupdate profil
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (profile.password !== profile.confirm_password) {
      alert('Password and confirm password do not match!');
      return;
    }

    try {
      const response = await axios.put(
        `https://final-project-api-alpha.vercel.app/api/auth/user/${userId}`, // Endpoint untuk update profil
        {
          name: profile.name,
          image_url: profile.image_url,
          email: profile.email,
          password: profile.password
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Token untuk autentikasi
          }
        }
      );

      if (response.status === 200) {
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile', error);
      alert('Failed to update profile');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  return (
    <div className="px-[80px] mt-[65px] mb-[35px]">
      <h1 className="font-sans font-bold text-[32px] text-black leading-[130%]">
        Edit{' '}
        <span className="font-sans font-bold text-[32px] text-primary">
          Profile
        </span>
      </h1>

      <form onSubmit={handleUpdate}>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>

        <label className="block mb-2">
          Image URL:
          <input
            type="text"
            name="image_url"
            value={profile.image_url}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>

        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            minLength={8}
          />
        </label>

        <label className="block mb-2">
          Confirm Password:
          <input
            type="password"
            name="confirm_password"
            value={profile.confirm_password}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            minLength={8}
          />
        </label>

        <button type="submit" className="bg-primary text-white p-2 mt-4">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
