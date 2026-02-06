export async function fetchPostDetail({params}) {
    // console.log(params.id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return res.json();
}