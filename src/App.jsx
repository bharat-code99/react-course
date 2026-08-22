import axios from "axios";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState({});

  const getData = async () => {
    // const response = await axios.get("https://jsonplaceholder.typicode.com/todos/10");
    // // console.log(response.data);
    // setData(response.data);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <button
        className="bg-blue-400 text-white font-medium px-5 py-2.5 rounded-md m-10 text-xs"
        onClick={getData}
      >
        Get Data
      </button>{" "}
      <br />
      App
    </div>
  );
}
