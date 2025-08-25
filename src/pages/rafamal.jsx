import React, { useEffect, useState } from "react";

const Rafamal = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://shedhub.com/api/search/get_listings")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // yahan log karo
        if (data.status && data.listings) {
          setListings(data.listings);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load listings");
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Listings</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-3 gap-6">
        {listings.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={item.main_image_url}
              alt={item.title}
              className="w-full h-40 object-cover mb-3 rounded"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-500">ID: {item.id}</p>
            <p className="text-green-600 font-bold">${item.SubTotal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rafamal;
