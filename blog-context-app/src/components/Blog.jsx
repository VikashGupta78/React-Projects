import React, { useContext } from 'react'
import { appContext } from '../context/appContext'
import Spinner from './Spinner';
import Card from './Card';

function Blog() {
    const { loading, posts } = useContext(appContext);
    return (
        <div className='w-full'>
            {loading ? (<Spinner />) :
                (posts.length === 0 ?
                    (
                        <div className="text-center mt-10">
                            <p className="text-lg text-gray-600">No posts found</p>
                        </div>
                    ) :
                    (
                        <div className="flex flex-col gap-2 w-3/4 m-auto">
                            {posts.map((post) => (
                                <Card post={post} key={post.id} />
                            ))}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Blog