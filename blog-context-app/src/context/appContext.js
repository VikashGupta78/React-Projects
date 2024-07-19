import { createContext, useState, useEffect } from "react";
import {baseUrl} from '../baseUrl';

export const appContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);


    const fetchBlogPosts = async(page = 1) => {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`
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

    useEffect(()=>{
        fetchBlogPosts();
    },[])

    const pageChangeHandler = (page) => {
        setPage(page);
        fetchBlogPosts(page);
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