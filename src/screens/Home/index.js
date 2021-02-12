import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { fetchData } from "../../api";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      // if (typeof localStorage.getItem("res") !== undefined) {
      //   let res = JSON.parse(localStorage.getItem("res"));
      //   setData(res);
      //   return;
      // }
      let res = await fetchData();
      console.log(res);
      setData(res);
      localStorage.setItem("res", JSON.stringify(res));
    };
    fetch();
  }, []);

  const filterResult = (search) => {
    if (data) {
      let res = data.filter((item) => {
        let name = item.name.toLowerCase();
        let title = item.title.toLowerCase();
        let category = item.category.toLowerCase();
        let subcategory = item.subcategory.toLowerCase();
        let searchString =
          name + " " + title + " " + category + " " + subcategory;
        if (searchString.includes(search.toLowerCase())) {
          return true;
        } else return false;
      });
      return res;
    }
  };

  const handleSubmit = async (e) => {
    if (e.key === "Enter") {
      console.log(search);
      let filteredData = filterResult(search);
      console.log(filteredData);
      history.push({
        pathname: "/search",
        state: {
          data: filteredData,
        },
      });
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <header className="home__header">
        <span>
          <AiOutlineClose /> Find & Book
        </span>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Doctors, specialities, clinics"
          onKeyPress={handleSubmit}
        />
      </header>
      <section className="home__section">
        <ul>
          <li>
            <h2>Finance</h2>
            <p>Dentist, Protodontist, etc.</p>
          </li>
          <li>
            <h2>Finance</h2>
            <p>Dentist, Protodontist, etc.</p>
          </li>
          <li>
            <h2>Finance</h2>
            <p>Dentist, Protodontist, etc.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
