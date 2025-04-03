import { useContext } from "react"
import PostContext from "../contexts/PostContext"
import PostCard from "./PostCard"
export default function PostList() {
    const { posts } = useContext(PostContext)
    console.log(posts)
    if (!posts || posts.length === 0) {
        return <h3>Loading posts...</h3>;
    }
    return (
        <>
            <div className="row">
                {
                    posts.map(post => {
                        return (

                            <PostCard key={post.id} post={post} />

                        )
                    })
                }

            </div>
        </>
    )
}