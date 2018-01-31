import React from 'react';

export default function Products({products}) {
    console.log("product for map : ", products);
    const list = () => {
        return products.map(product => {
          return (
            <li key={product.id}>
                {product.productName} 
                {product.productCode} 
                {product.productDesc}
            </li>
          )
        })
    }

    return(
        <div>
           <ul>
               { list() }
           </ul>
        </div>
    )
}