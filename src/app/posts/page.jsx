
const getPosts = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts")

if(!res.ok){
 throw new Error("Failed to fetch posts")
}
return res.json()
}
const PostsPage = async() => {
const posts =  await getPosts();
    return (
        <div>
            <h1>Posts:{posts.length}</h1>
        </div>
    );
};

export default PostsPage;