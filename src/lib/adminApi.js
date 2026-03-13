import axios from "axios";

const apiBaseUrl = import.meta.env.DEV
  ? "http://localhost:5000"
  : import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const adminLoginApi = async (email, password) => {
  const response = await axios.post(`${apiBaseUrl}/api/admin/login`, { email, password });
  return response.data;
};

export const fetchContactsApi = async () => {
  const response = await axios.get(`${apiBaseUrl}/api/contact/get-contacts`);
  return response.data;
};

export const deleteContactApi = async (id) => {
  const response = await axios.delete(`${apiBaseUrl}/api/contact/delete-contact/${id}`);
  return response.data;
};

