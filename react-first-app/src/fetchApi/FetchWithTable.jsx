import React from 'react'
import { useState, useEffect } from 'react';
const FetchWithTable = () => {
const [data, setData] = useState([]);
useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((jsonData) => {
        setData(jsonData.products);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}

  return (
    
     <>
     <div>{data.length > 0 ? data.map((item) => <p key={item.id}>{item.title} - ${item.price}</p>) : <p>No data available</p>}</div></>
    
    
  );
};

export default FetchWithTable