import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import RegisterImage from "../../assets/img/register.png"; // Gambar latar belakang
import logo from "../../assets/logo/logo2.png"; // Logo aplikasi
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State untuk konfirmasi password
  const [imageUrl, setImageUrl] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk menampilkan konfirmasi password
  const [agreeToTerms, setAgreeToTerms] = useState(false); // State untuk checkbox
  const [imageError, setImageError] = useState(""); // State untuk menyimpan pesan kesalahan gambar
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert("Anda harus menyetujui syarat dan ketentuan untuk melanjutkan."); // Validasi checkbox
      return;
    }
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password harus sama."); // Validasi password
      return;
    }
    if (!isValidImageUrl(imageUrl)) {
      alert("URL foto profil tidak valid."); // Validasi URL gambar
      return;
    }

    try {
      const response = await axios.post(
        "https://final-project-api-alpha.vercel.app/api/auth/register",
        {
          name,
          image_url: imageUrl,
          email,
          password,
        }
      );
      console.log("Registration successful", response.data);
      // Simpan token di cookies jika diperlukan
      Cookies.set("token", response.data.token, { expires: 7 });
      // Redirect ke halaman login setelah registrasi
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
      alert("Pendaftaran gagal. Silakan periksa kembali data yang Anda masukkan."); // Menampilkan pesan kesalahan
    }
  };

  // Fungsi untuk memvalidasi URL gambar
  const isValidImageUrl = (url) => {
    const pattern = /\.(jpeg|jpg|gif|png|svg)$/;
    return pattern.test(url) || url.startsWith("http") || url.startsWith("https");
  };

  return (
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleRegister}
          className="bg-white p-16 rounded shadow-custom w-3/4 h-4/4"
        >
          {/* Pilihan Login atau Register */}
          <div className="flex justify-between mb-4 bg-whiteSecondary rounded-[10px] p-3 gap-6">
            <button
              type="button"
              className="text-black bg-white border-2 border-primary w-1/2 h-10 text-center rounded-[10px] font-sans font-semibold"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              type="button"
              className="text-white bg-primary w-1/2 h-10 px-5 text-center rounded-[10px] font-sans font-semibold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>

          <h2 className="text-black font-bold font-sans text-[32px] mt-[40px]">
            Register
          </h2>
          <p className="text-blackSecondary font-regular font-sans text-[16px] mb-[20px]">
            Lengkapi data diri anda!
          </p>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded font-regular font-sans text-[14px]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded font-regular font-sans text-[14px]"
          />
          <input
            type="text"
            placeholder="URL Foto Profil"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded font-regular font-sans text-[14px]"
          />
          {imageError && <p className="text-red-500">{imageError}</p>}
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
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Konfirmasi Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={8}
              required
              className="border border-gray-300 p-2 w-full rounded font-regular font-sans text-[14px]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="flex items-center justify-center absolute top-1/2 right-2 transform -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              required
              className="mr-2"
            />
            <label
              htmlFor="agreeToTerms"
              className="font-regular font-sans text-[12px] text-black"
            >
              Saya setuju dengan{" "}
              <span className="font-bold font-sans text-[12px] text-primary">
                Syarat dan Ketentuan
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-[10px] w-full hover:bg-blue-600 mt-[40px]"
          >
            Register
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="bg-primary w-1/2 flex justify-center items-end">
        <div
          className="relative w-[482px] h-[641px] bg-cover"
          style={{
            backgroundImage: `url(${RegisterImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover", // Pastikan gambar memenuhi ruang
          }}
        >
          {/* Logo dan tulisan */}
          <div className="flex flex-col text-center p-4 absolute bottom-10 left-0 right-0 mb-[600px]">
            <img src={logo} alt="Logo" className="mx-auto mb-4" />
            <h2 className="text-white font-bold font-sans text-[32px]">
              Gabung Sekarang Bersama KerjaYuk
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
