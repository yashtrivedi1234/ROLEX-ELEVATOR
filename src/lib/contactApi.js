import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

export const submitContact = async (payload) => {
  const { data } = await axios.post(`${apiBaseUrl}/api/contact/add-contact`, payload);
  return data;
};