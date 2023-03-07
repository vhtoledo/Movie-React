import styles from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export const Search = () => {
  const query = useQuery();
  const search = query.get("search");

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          placeholder="Buscar..."
          aria-label="Search movies"
          onChange={(e) => {
            const value = e.target.value;
            history.push("/?search=" + value)
          }}
        />
        <BiSearchAlt size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
};
