import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/img/login.png";
import logo from "../../assets/logo/logo2.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://final-project-api-alpha.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful", response.data);
      // Simpan token di cookies
      Cookies.set("token", response.data.token, { expires: 7 });
      // Simpan informasi pengguna jika diperlukan
      Cookies.set("user", JSON.stringify(response.data.user), { expires: 7 });
      // Redirect ke halaman dashboard
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      alert("Login gagal. Silakan periksa kembali email dan password Anda."); // Tampilkan pesan kesalahan
    }
  };

  return (
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-16 rounded shadow-custom w-3/4 h-3/4"
        >
          {/* Pilihan Login atau Register */}
          <div className="flex justify-between mb-4 bg-whiteSecondary rounded-[10px] p-3 gap-6">
            <button
              type="button"
              className="text-white bg-primary w-1/2 h-10 px-5 text-center rounded-[10px] font-sans font-semibold"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
            <button
              type="button"
              className="text-black bg-white border-2 border-primary w-1/2 h-10 text-center rounded-[10px] font-sans font-semibold"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>

          <h2 className="text-black font-bold font-sans text-[32px] mt-[60px]">
            Login
          </h2>
          <p className="text-blackSecondary font-regular font-sans text-[16px] mb-[40px]">
            Masukkan email dan password anda
          </p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded font-regular font-sans text-[14px]"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
              className="border border-gray-300 p-2 w-full rounded font-regular font-sans text-[14px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="flex items-center justify-center absolute top-1/2 right-2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
          <div className="mt-4 text-end">
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => {}}
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-[10px] w-full hover:bg-blue-600 mt-[40px]"
          >
            Login
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="bg-primary w-1/2 flex justify-center items-end">
        <div
          className="relative w-[720px] h-[474px] bg-cover"
          style={{
            backgroundImage: `url(${loginImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col text-center p-4 absolute bottom-10 left-0 right-0 mb-[500px]">
            <img src={logo} alt="Logo" className="mx-auto mb-4" />
            <h2 className="text-white font-bold font-sans text-[32px]">
              Temukan Pekerjaan Impianmu Bersama KerjaYuk
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
