import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {

const [users, setProduct] = useState([]);
const [isPending, setPending] = useState(true);

  useEffect(() => {
      
    setTimeout(() => {

      axios
      .get("https://61eff057732d93001778e6c0.mockapi.io/Users")
      .then((res) => {
       
        setProduct(res.data);
        setPending(false);
      })
    }, 1000);

  }, [url]);
  
  return {users, isPending}
}
export default useFetch;