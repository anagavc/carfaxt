import axios from "axios";
const server = "https://carfaxt.herokuapp.com";
const API = axios.create({ baseUrl: "https://carfaxt.herokuapp.com" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const fetchRentals = () => API.get(`${server}/rentals`);
export const fetchRentalsBySearch = (searchQuery) =>
  API.get(
    `${server}/rentals/search?searchQuery=${searchQuery.carType}&location=${searchQuery.location}`
  );
export const fetchUserBookings = (user) =>
  API.get(`${server}/user/getBookings`, { user });
export const createRental = (newRental) =>
  API.post(`${server}/rentals`, newRental);
export const bookRental = (id) => API.get(`${server}/rentals/${id}`);
export const makePayment = (newPayment, id) =>
  API.post(`${server}/rentals/${id}`, newPayment);
export const updateRental = (id, updatedRental) =>
  API.patch(`${server}/rentals/${id}/`, updatedRental);

export const deleteRental = (id) => API.delete(`${server}/rentals/${id}`);

export const signIn = (formData) => API.post(`${server}/user/signin`, formData);
export const signUp = (formData) => API.post(`${server}/user/signup`, formData);
export const updateAccount = (id, formData) =>
  API.patch(`${server}/user/updateAccount/${id}`, formData);
export const subscribe = (formData) =>
  API.post(`${server}/user/subscribe`, formData);
