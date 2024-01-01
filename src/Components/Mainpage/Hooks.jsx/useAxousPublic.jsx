import axios from "axios";

export const axiospublic = axios.create({
    baseURL: 'https://frouts-server.vercel.app'
  
  });

const useAxousPublic = () => {
    
    return axiospublic
};

export default useAxousPublic;