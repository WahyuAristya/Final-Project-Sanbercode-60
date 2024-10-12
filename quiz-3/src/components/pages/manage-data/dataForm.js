import React, { useEffect, useState } from "react";
import { postData } from "../../services/apiService";

const DataForm = ({ onAddData }) => {
  const [iosIsChecked, setIosIsChecked] = useState(false);
  const [androidIsChecked, setAndroidIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    category: "",
    description: "",
    price: 0,
    rating: 0,
    relaseYear: 0,
    size: 0,
    isAndroid: false,
    isIos: false,
  });

  const handleToggleIos = (e) => {
    const newValue = e.target.checked;
    setIosIsChecked(newValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      isIos: newValue,
    }));
  };

  const handleToggleAndroid = (e) => {
    const newValue = e.target.checked;
    setAndroidIsChecked(newValue);
    setFormData((prevData) => ({
      ...prevData,
      isAndroid: newValue,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isValidURL(url) {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-zA-Z0-9]{1,})([a-zA-Z0-9\\-\\._]{0,}))+\\.[a-zA-Z]{2,63})" +
        "(\\:[0-9]{1,5})?" +
        "(\\/.*)?$",
      "i"
    );
    return !!urlPattern.test(url);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!iosIsChecked && !androidIsChecked) {
      alert("Please select at least one platform");
      return;
    }

    if (!isValidURL(formData.imageUrl)) {
      alert("Please enter a valid image URL");
      return;
    }

    const submissionData = {
      image_url: formData.imageUrl,
      name: formData.name,
      category: formData.category,
      description: formData.description,
      price: parseInt(formData.price),
      rating: parseInt(formData.rating),
      release_year: parseInt(formData.relaseYear),
      size: parseInt(formData.size),
      is_android_app: formData.isAndroid ? 1 : 0,
      is_ios_app: formData.isIos ? 1 : 0,
    };

    try {
      const response = await postData(submissionData);
      console.log("Response:", response.data);
      onAddData(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error data:", error.response.data);
      } else {
        console.error("Error during submission:", error);
      }
    }

    setFormData({
      imageUrl: "",
      name: "",
      category: "",
      description: "",
      price: 0,
      rating: 0,
      relaseYear: 0,
      size: 0,
    });
    setIosIsChecked(false);
    setAndroidIsChecked(false);
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="text-xl font-bold ">Create Data</h1>
      </div>
      <p className="container mx-auto mt-10">Gambar dari Game</p>
      <div className="">
        <form onSubmit={handleSubmit}>
          <label className="mb-8 mt-3 container flex flex-col p-4 mx-auto rounded-[10px] shadow-[1px_1px_4px_1px_rgba(0,0,0,0.1)] overflow-hidden">
            <span className="text-black font-medium">Image URL</span>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              required
              className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <p className="container mx-auto mt-10">Data Game</p>
          <div className="mb-8 mt-3 container flex flex-col p-4 mx-auto rounded-[10px] shadow-[1px_1px_4px_1px_rgba(0,0,0,0.1)] overflow-hidden">
            <label className="block mb-8 mt-3">
              <span className="text-black font-medium">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-8">
              <span className="text-black font-medium">Category</span>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-8">
              <span className="text-black font-medium">Description</span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-8">
              <span className="text-black font-medium">Price</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min={0}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-8">
              <span className="text-black font-medium">Rating</span>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                min={0}
                max={5}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-8">
              <span className="text-black font-medium">Relase Year</span>
              <input
                type="number"
                name="relaseYear"
                value={formData.relaseYear}
                onChange={handleInputChange}
                min={2009}
                max={2024}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-8">
              <span className="text-black font-medium">Size</span>
              <input
                type="number"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                min={0}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <p className="container mx-auto mt-10">Jenis Perangkat</p>
          <div className="mb-8 mt-3 container flex flex-col p-4 mx-auto rounded-[10px] shadow-[1px_1px_4px_1px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="border-b border-gray-300 pb-5">
              <span className="text-black font-medium block mb-4">
                Android ?
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="isAndroid"
                  className="sr-only peer"
                  onChange={handleToggleAndroid}
                  checked={androidIsChecked}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span
                  className={`ms-3 text-sm font-bold ${
                    androidIsChecked ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {androidIsChecked ? "True" : "False"}
                </span>
              </label>
            </div>
            <div className="">
              <span className="text-black font-medium block mb-4 mt-4">
                IOS ?
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="isIos"
                  className="sr-only peer"
                  onChange={handleToggleIos}
                  checked={iosIsChecked}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span
                  className={`ms-3 text-sm font-bold ${
                    iosIsChecked ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {iosIsChecked ? "True" : "False"}
                </span>
              </label>
            </div>
          </div>
          <div className="container mx-auto mb-20">
            <button
              type="submit"
              className="bg-blue-600 border border-gray-300 text-white py-2 px-2 rounded-[5px] w-[7%] font-medium hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DataForm;
