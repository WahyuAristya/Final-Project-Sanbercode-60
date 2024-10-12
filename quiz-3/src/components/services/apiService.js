import axios from "axios";

const API_BASE_URL = "https://quiz-api-rho.vercel.app/api/mobile-apps";

// GET DATA
export const getData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// POST DATA
export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// EDIT DATA
export const updateData = async (updatedData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${updatedData._id}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// DELETE DATA
export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
