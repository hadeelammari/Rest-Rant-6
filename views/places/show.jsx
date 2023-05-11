const React = require("react");
const Def = require("../default");

function show(data) {
  console.log(data)
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not yet rated</h3>;

  comments = data.place.comments.map(c => {
    return (
      <div className="border col-sm-4">
        <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
        <h4>{c.content}</h4>
        <h3>
          <stong>- {c.author}</stong>
        </h3>
        <h4>Rating: {c.stars}</h4>
        <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
          <input type="submit" className="btn btn-danger" value="Delete Comment" />
        </form>
      </div>
    )
  })

  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} width="400px" />
        <div id='description'>
          <h2>Description</h2>
          <h3>Located in {data.place.city}, {data.place.state}</h3>
        </div>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <div id='comments'>
          <h2>Comments</h2>
          {comments}
        </div>
        <div id='rating'>
          {rating}
        </div>

        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
     
      </main>
    </Def>
  )
}


module.exports = show;
