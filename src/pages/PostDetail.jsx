import { useParams } from "react-router"

export default function PostDetail() {
    const {id} = useParams();

    return <div>post detail id: {id}</div>
}