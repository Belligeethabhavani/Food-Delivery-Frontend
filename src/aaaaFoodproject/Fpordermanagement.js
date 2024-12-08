

import React, { useState } from 'react';
import '../App.css';

export default function Fpordermanaement() {
  const [search, setSearch] = useState('');

  // Array of 24 food items
  const foodItems = [
    { name: 'Pizza', image: '/piza.jpg' },
    { name: 'Dosa', image: "/dosa.jpg" },
    { name: 'Burger', image: '/burger.jpg' },
    { name: 'Pancakes', image: '/pancakes.jpg' },
    { name: 'Fried Rice', image: '/friedrice.jpg' },
    { name: 'Paneer', image: '/paneer.jpg' },
    { name: 'Biriyani', image: '/biriyani.jpg' },
    { name: 'Soup', image: '/soup.jpg' },
    { name: 'Kebab', image: '/kabab.jpg' },
    { name: 'Noodles', image: '/nood.jpg' },
    
    { name: 'Steak', image: '/steak.jpg' },
    
  ];

  // Filter food items based on search
  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#03346E', // Orange background
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search food items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {filteredItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '150px',
              margin: '10px',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '3px solid #fff',
                backgroundColor: '#1230AE', // Light orange for the circle background
              }}
            />
            <p
              style={{
                marginTop: '10px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
/*import React from 'react'

export default function Fpordermanagement() {
  return (
    <div>Fpordermanagement</div>
  )
}
  */
