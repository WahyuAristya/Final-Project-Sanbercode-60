import React, { useState, useEffect } from "react";

const EditData = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang akan disimpan:", formData);
    onSave(formData);
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold mb-5">Edit Data</h1>
      </div>
      <div className="mb-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-8 mt-3 container flex flex-col p-4 mx-auto rounded-[10px] overflow-hidden">
            <label className="block mb-4">
              <span className="text-black font-medium">Nama</span>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-4">
              <span className="text-black font-medium">Kategori</span>
              <input
                type="text"
                name="category"
                value={formData.category || ""}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-4">
              <span className="text-black font-medium">Deskripsi</span>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-4">
              <span className="text-black font-medium">Harga</span>
              <input
                type="number"
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-4">
              <span className="text-black font-medium">Rating</span>
              <input
                type="number"
                name="rating"
                value={formData.rating || ""}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-4">
              <span className="text-black font-medium">Tahun Rilis</span>
              <input
                type="number"
                name="release_year"
                value={formData.release_year || ""}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-4">
              <span className="text-black font-medium">Ukuran</span>
              <input
                type="text"
                name="size"
                value={formData.size || ""}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-8 mt-3 container flex flex-col p-4 mx-auto rounded-[10px] overflow-hidden">
            <div className="flex items-center mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="is_android_app"
                  checked={formData.is_android_app || false}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      is_android_app: e.target.checked,
                    }))
                  }
                  className="mr-2"
                />
                <span className="text-black font-medium">IS_ANDROID_APP</span>
              </label>
            </div>
            <div className="flex items-center mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="is_ios_app"
                  checked={formData.is_ios_app || false}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      is_ios_app: e.target.checked,
                    }))
                  }
                  className="mr-2"
                />
                <span className="text-black font-medium">IS_IOS_APP</span>
              </label>
            </div>
          </div>
          <div className="container mx-auto mb-20">
            <button
              type="submit"
              className="bg-blue-600 border border-gray-300 text-white py-2 px-2 rounded-[5px] w-[7%] font-medium hover:bg-blue-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditData;
