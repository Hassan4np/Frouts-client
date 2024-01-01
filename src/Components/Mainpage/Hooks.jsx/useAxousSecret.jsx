import axios from "axios";

export const axiossecrt = axios.create({
    baseURL: 'https://frouts-server.vercel.app'
  
  });

const useAxousSecret = () => {
    
    return axiossecrt
};

export default useAxousSecret;