import React, { useEffect, useState } from "react";
import { getData } from "../../services/apiService";
import CurrencyFormat from "react-currency-format";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getData();
      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error("Data yang diterima bukan array:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatSize = (size) => {
    if (size >= 1000) {
      return `${(size / 1000).toFixed(2)} GB`;
    } else {
      return `${size} MB`;
    }
  };

  return (
    <>
      <section className="bg-gray-200 p-5 min-h-screen">
        <div className="container mx-auto mt-10">
          <h1 className="text-xl font-bold ">Find your data that you need!</h1>
        </div>
        <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
          {data.map((item) => (
            <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image_url}
                className="w-1/3 bg-cover bg-center bg-landscape"
              />
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {item.name}
                </h1>
                <small>{item.release_year}</small>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                <div className=" item-center mt-2 text-gray-500">
                  <span>{item.category}</span> {}
                  <span>{formatSize(item.size)}</span>
                  {item.is_android_app === 1 && <span>, Android</span>}
                  {item.is_ios_app === 1 && <span> &amp; IOS</span>}
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    {item.price === 0 ? (
                      <span>Free</span>
                    ) : (
                      <CurrencyFormat
                        value={item.price}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp. "}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        renderText={(value) => {
                          const parts = value.split(",");
                          if (parts.length === 2) {
                            return `${parts[0]},-`;
                          }
                          return value;
                        }}
                      />
                    )}
                  </h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    {item.rating} RATINGS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
