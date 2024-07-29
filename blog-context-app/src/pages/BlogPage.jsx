import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { appContext } from '../context/appContext';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

function BlogPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const blogId = location.pathname.split("/").at(-1);

    const { loading, setLoading } = useContext(appContext);
    const [blog, setBlog] = useState('');
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${baseUrl.slice(0, -1)}?blogId=${blogId}`;
        console.log("blog url", url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.error(error, "error in fetch blog page");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        // console.log("inside blog page");
        if (blogId) {
            // console.log("inside blog page useeffect page");
            fetchRelatedBlogs();
        }
    }, [location.pathname])
    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <h1 className="text-3xl font-bold uppercase text-center mb-5">CodeHelp Blogs</h1>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            {loading ?
                (<Spinner />) :
                (blog ?
                    (
                        <div>
                            <Card post={blog} />
                            <h2>Related Blogs</h2>
                            {relatedBlogs.map((post) => (
                                <Card post={post} key={post.id} />
                            ))}
                        </div>

                    ) :
                    (<p>No blog found</p>)
                )
            }

        </div>
    )
}

export default BlogPage