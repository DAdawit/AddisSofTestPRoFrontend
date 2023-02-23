import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
// const Dotenv = require('dotenv-webpack');

// module.exports = {
//   plugins: [
//     new Dotenv()
//   ]
// };
