import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const User1 = () => {

    const [users, setProduct] = useState([]);
    const [isPending, setPending] = useState(true);
    
        const { id } = useParams();

        console.log(id)

        useEffect(() => {
      
            setTimeout(() => {
        
              axios
              .get(`https://61eff057732d93001778e6c0.mockapi.io/Users/${id}`)
              .then((res) => {
               
                setProduct(res.data);
                setPending(false);
              })
            }, 1000);
        
          }, [id]);
        
        return (
    
            <div className= "userDetails">
    
    
                <h1> Here is the User {id}</h1>
                {isPending && <div>Loading...</div>}
                {users && <div>
                    
                <p>User ID: {users.id}</p>
                <p>User Name: {users.name}</p>
                    </div>}
            </div>
           
        );
    }
export default User1;