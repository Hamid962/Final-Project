import styles from "./Searchbar.module.css";
import { memo } from "react";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(function () {
    async function searchData() {
      const res = await fetch(
        ` https://swapi.dev/api/people/?search=${searchTerm} `
      );
      const data = await res.json();
      console.log(data);
    }
    searchData();
  }, []);

  const debouncedSearch = debounce(onSearch, 1000);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  console.log("searchTerm>>>>>>>>>>", searchTerm);
  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className={styles.btn}>Search</button>
    </div>
  );
};

export default memo(Searchbar);
