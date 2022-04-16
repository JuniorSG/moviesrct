import "./Search.css"
import {FaSearch} from "react-icons/fa"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from  "../hooks/useQuery.jsx"
// import {useLocation} from "react-router"

function Search() {
    // const location = useLocation()
    // console.log(location);
    const query = useQuery();
    const search = query.get("search")

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setSearchText(search || "")
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search="+searchText)
    }
  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
        <div className="searchBox">
            <input className="searchInput" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className="searchButton" type="submit"><FaSearch size="20"/></button>
        </div>
    </form>
  )
}

export default Search