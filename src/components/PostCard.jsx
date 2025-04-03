export default function PostCard({ post }) {
    console.log(post)
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
                <img src={post.image} alt={post.title} className="card-img-top p-3" height={"300px"} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{post.title}</h5>
                    <p>{post.description}</p>
                    <h6 className="text-info mt-auto">{post.price}$</h6>
                </div>
            </div>
        </div>)
}