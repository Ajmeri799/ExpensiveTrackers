import React from "react";
import { useState } from "react";

function Content() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [itemList, setItemList] = useState([]);
  const [total, setTotal] = useState(0);
  const handleValues = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (item.length != "" && price.length != "") {
      const newVal = {
        item: item,
        price: price,
      };

      setItemList([...itemList, newVal]);

      handelTotal();
      setItem("");
      setPrice("");
    } else {
      alert("put values");
      setItem("");
      setPrice("");
    }
  };
  const handelTotal = () => {
    setTotal(total + parseInt(price));
    console.log(total);
  };
  const remove = () => {
    const vals = itemList.pop();
    setTotal(total - parseInt(vals.price));
  };
  return (
    <div>
      <h1 className=" text-3xl font-bold py-5">ExpensiveTracker</h1>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out w-96"
        placeholder="Enter a Item..."
        value={item}
        onChange={handleValues}
      />
      <br />
      <br />
      <input
        type="number"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out  w-96"
        placeholder="Enter a Price..."
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <br />
      <div className="mb-5">
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none mr-20 hover:bg-indigo-600 rounded text-lg"
          onClick={addItem}
        >
          Add
        </button>

        <button
          onClick={remove}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          DELETE
        </button>
      </div>

      <div className="py-2 mr-2 inline-block w-44 bg-gray-800 border-gray-700 rounded-2xl border">
        <h1 className="text-1xl font-bold p-2">ITEM LIST :</h1>
        <ul>
          {itemList.map((e, id) => (
            <li key={id}>
              {e.item} : {e.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-2  mt-0 inline-block w-44 bg-gray-800 border-gray-700 rounded-2xl border">
        <h1 className="text-1xl font-bold p-2">TOTAL :</h1>
        <div>{total}</div>
      </div>
    </div>
  );
}

export default Content;
