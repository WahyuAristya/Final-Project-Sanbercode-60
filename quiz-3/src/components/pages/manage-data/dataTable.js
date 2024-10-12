import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { getData, deleteData, updateData } from "../../services/apiService";
import EditData from "./editData";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getData();
      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error("Data yang diterima bukan array:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = async (formData) => {
    if (!editingItem || !editingItem._id) {
      console.error("Editing item is not defined or does not have an _id.");
      return;
    }

    const updatedData = {
      _id: editingItem._id,
      name: formData.name || editingItem.name,
      description: formData.description || editingItem.description,
      category: formData.category || editingItem.category,
      release_year: formData.release_year || editingItem.release_year,
      size: formData.size || editingItem.size,
      price: formData.price || editingItem.price,
      rating: formData.rating || editingItem.rating,
      is_android_app:
        formData.is_android_app !== undefined
          ? formData.is_android_app
          : editingItem.is_android_app,
      is_ios_app:
        formData.is_ios_app !== undefined
          ? formData.is_ios_app
          : editingItem.is_ios_app,
    };

    console.log("Data yang akan diperbarui:", updatedData);

    try {
      await updateData(updatedData);
      setEditingItem(null);
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
      if (error.response) {
        console.error("Kesalahan respons:", error.response.data);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="text-xl font-bold">Manage Data</h1>
      </div>
      <div className="container flex flex-col mx-auto mt-[3%] mb-[3%] rounded-[10px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] overflow-hidden">
        {editingItem ? (
          <EditData
            item={editingItem}
            onSave={handleSave}
            onCancel={() => setEditingItem(null)}
          />
        ) : (
          <Table className="table-auto w-full">
            <Table.Head className="bg-[#A149FA] text-white">
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                NO
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                NAMA
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                KATEGORI
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                DESCRIPTION
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                PRICE
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                RATING
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                RELEASE YEAR
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                SIZE
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                IS_ANDROID_APP
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                IS_IOS_APP
              </Table.HeadCell>
              <Table.HeadCell className="px-4 py-4 text-left align-middle bg-transparent">
                ACTION
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.length > 0 ? (
                data.map((item, index) => (
                  <Table.Row key={item._id} className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-left px-4 py-4">
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.name}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.category}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4 truncate max-w-[150px]">
                      {item.description}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.price}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.rating}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.release_year}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.size}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.is_android_app}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      {item.is_ios_app}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-yellow-200 border border-gray-300 text-black-100 py-1 px-2 rounded-[5px] p-[2px] mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]"
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan="11" className="text-center px-4 py-4">
                    Tidak ada data
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        )}
      </div>
    </>
  );
};

export default DataTable;
