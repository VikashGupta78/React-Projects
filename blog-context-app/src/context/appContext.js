import { createContext, useState, useEffect } from "react";
import {baseUrl} from '../baseUrl';
import { useNavigate } from "react-router-dom";

export const appContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();


    const fetchBlogPosts = async(page = 1, tag = null, category) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`
        }
        // console.log("final url: ", url);
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);

        } catch (error) {
            console.error("error fetching data: ", error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    // useEffect(()=>{
    //     fetchBlogPosts();
    // },[])

    const pageChangeHandler = (page) => {
        navigate({search: `?page=${page}`});
        setPage(page);
    }

    const value = {
        loading,
        setLoading,
        page, 
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchBlogPosts,
        pageChangeHandler
    }


    return <appContext.Provider value = {value}>
        {children}
    </appContext.Provider>
}