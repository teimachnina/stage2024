import React from 'react';
import './Products.css';
import product1 from '../assets/school-1.png';
import product2 from '../assets/school-2.png';
import product3 from '../assets/school-3.png';

const productsData = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is a great product.',
        price: '30dt',
        image: product1
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This product is even better.',
        price: '40dt',
        image: product2
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'The best product you can buy.',
        price: '50dt',
        image: product3
    }
];

export function Products() {
    return (
        <div className="products-container">
            {productsData.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}</p>
                </div>
            ))}
        </div>
    );
}
