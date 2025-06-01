import axios from "axios";

// Create a custom instance of axios with a base URL
const axiosInstance = axios.create({
  // Replace with the base URL of your backend API
  // Example: 'http://localhost:5000' if your backend runs on port 5000
  baseURL: "http://localhost:5000", // <-- **Verify this matches your backend URL**
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    // You might add other headers here, like authorization tokens
  },
});

export default axiosInstance;
