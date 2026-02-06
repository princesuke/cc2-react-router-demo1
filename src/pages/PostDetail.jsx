import { useParams } from "react-router"
import { useLoaderData } from "react-router";

export default function PostDetail() {
    const post = useLoaderData();
    console.log(post);

    return <div>
        <h2>title:{post.title}</h2>
        <p>id:{post.id}</p>
        <p>userId:{post.userId}</p>
        <p>{post.body}</p>
    </div>
}