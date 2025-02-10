import { base_url } from "../../api/axiosConfig";
import axios from 'axios';

const getAllProperties = async () => {
  
  const response = await axios.get(`${base_url}/property-types`);
  return response.data;
};
const getPropertiesbyRegion = async () => {
  
  const response = await axios.get(`${base_url}/get-propertiesbyregion`);
  return response.data;
};
const deleteProperty = async (id) => {
  const response =   await axios.delete(`${base_url}/property-types/${id}`);
  return response.data;
};

const editProperty = async (data) => {
  console.log(data)
  const response = await axios.put(`${base_url}/properties${data.id}`, data.data);
  return response.data;
};

const propertyService={
  getAllProperties,
  deleteProperty,
  editProperty,
  getPropertiesbyRegion,
}
export default propertyService;
