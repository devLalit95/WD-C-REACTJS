import React from 'react'
import { useState, useEffect } from 'react';

const ProductCards = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setProducts(jsonData.products);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Products</h1>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {products.map((product) => (
                    <div key={product.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        backgroundColor: 'white'
                    }}>
                        <img 
                            src={product.thumbnail} 
                            alt={product.title}
                            style={{ 
                                width: '100%', 
                                height: '150px', 
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                        />
                        <h3 style={{ margin: '10px 0 5px 0', fontSize: '16px' }}>{product.title}</h3>
                        <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>{product.category}</p>
                        <p style={{ fontWeight: 'bold', color: '#2ecc71', margin: '5px 0' }}>${product.price}</p>
                        <p style={{ fontSize: '12px', color: '#999', margin: '5px 0' }}>Rating: {product.rating} ⭐</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCards;