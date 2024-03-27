import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import dotenv from 'dotenv';

// dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.PUBLIC_KEY' : JSON.stringify(process.env.PUBLIC_KEY)
  }
})
