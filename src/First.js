import axios from "axios";
import React from "react";

export default class App extends React.Component{

    state = {
        products : [],
    }

   componentDidMount(){

        axios.get('https://fakestoreapi.com/products')

            .then(res => {

                console.log(res);
                this.setState({products : res.data});

            });
   } 

   render(){


    
         const productdata = this.state.products
         console.log(Object.entries(productdata))
         const objValue = Object.entries(productdata)
        return <ul>  

{objValue}

                {objValue.map(product =>
                   <>
                    <li>{product.keys} : {product.values}</li>
                   </>
                   )}
                 
        </ul>
   }
}