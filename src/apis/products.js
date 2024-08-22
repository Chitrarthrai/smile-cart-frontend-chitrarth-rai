import axios from "axios";

const show = () =>
  axios.get(
    "https://smile-cart-backend-staging.neetodeployapp.net/products/infinix-inbook-2"
  );

const productsApi = { show };

export default productsApi;
