import { useEffect, useState } from "react"
import axios from 'axios'

function Products(){

    const [product, setProduct] = useState([])

    useEffect( () => {

        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setProduct(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }, []
    )

    return (
        <div>

            <ul>
            {
                product.map(prodct => <>
                    <li>Id: {prodct.id}</li>
                    <li>Title: {prodct.title}</li>
                    <li>Category: {prodct.category}</li>
                    <li>Description{prodct.description}</li>
                    <li>Price: {prodct.price}</li>
                   </>)
            }
            </ul>
        </div>
    )
}
export default Products;