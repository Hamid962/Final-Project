// // User.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import styles from "./User.module.css";
import Spinner from "./Spinner";
import UserItem from "./UserItem";
import { Pagination } from "antd";
import Searchbar from "./Searchbar";
import { memo } from "react";

const API = "https://swapi.dev/api/";
const pageSize = 10;

function User() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPeople, setTotalPeople] = useState(0);

  useEffect(() => {
    // async function fetchData() {
    //   setIsLoading(true);
    //   try {
    //     // const res = await fetch(`${API}people?page=${currentPage}`);
    //     // const data = await res.json();
    //     const res = await axios.get(`${API}people`);
    //     setPeople(data.results);
    //     setFilteredPeople(data.results);
    //     setTotalPeople(data.count);
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     setIsLoading(false);
    //   }
    // }
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API}people`);
        const data = response.data; // Destructure the data from the response object
        console.log(data);
        setPeople(data.results);
        setFilteredPeople(data.results);
        setTotalPeople(data.count);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (term) => {
    const filteredResults = people.filter((person) =>
      person.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPeople(filteredResults);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Searchbar onSearch={handleSearch} />

          <div className={styles.grid}>
            {filteredPeople.map((person) => (
              <UserItem key={person.name} person={person} />
            ))}
          </div>
          <div className={styles.pagination}>
            <Pagination
              colorText="white"
              current={currentPage}
              pageSize={pageSize}
              total={totalPeople}
              onChange={handlePageChange}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default memo(User);
