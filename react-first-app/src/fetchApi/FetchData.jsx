import React from 'react'
import { useState, useEffect } from 'react';

const FetchData = () => { 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      handleFetchData();
    }, []);

    const handleFetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData.quotes);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Quote</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Author</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.quote}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;