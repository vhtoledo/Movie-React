import styles from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export const Search = () => {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory()

  useEffect(() => {
    setSearchText(search || "")
  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <BiSearchAlt size={20} />
        </button>
      </div>
    </form>
  );
};
