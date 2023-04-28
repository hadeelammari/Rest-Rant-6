const React = require("react");
const Def = require("../default");

function Show(data) {
  return (
    <Def>
      <div className="container">
        <h1>{data.place.name}</h1>
        <p>{data.place.description}</p>

        {/* {place.comments.length > 0 ? (
          <ul>
            {place.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        ) : (
          <h3>No comments yet!</h3>
        )} */}

        {data.place.rating ? (
          <h3>Rating: {data.place.rating}</h3>
        ) : (
          <h3>Not rated yet!</h3>
        )}

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </div>
    </Def>
  );
}

module.exports = Show;
