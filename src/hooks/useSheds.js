import { useEffect, useState } from "react";

export function useSheds() {
  const [allsheds, setSheds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSheds = async () => {
      try {
        const response = await fetch("https://shedhub.com/api/search/get_listings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            zipcode: "40502",
            radius: 100,
            priceRange: [0, 100000],
            widths: [],
            lengths: [],
            colors: [],
            shedStyle: [],
            available: true,
            brand: "",
            dataShedstyle: "",
            inventory_type: "",
            location: { latitude: "38.0189", longitude: "-84.5060" },
            latitude: "38.0189",
            longitude: "-84.5060",
            pageNum: 0,
            pageSize: 10,
            paintBrand: "",
            sortBy: "score",
            user_agent: "USER",
          }),
        });

        const data = await response.json();
        setSheds(data.listings || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSheds();
  }, []);

  return { allsheds, loading, error };
}
