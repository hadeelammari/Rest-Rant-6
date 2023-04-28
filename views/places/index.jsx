const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`}>{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img src={place.pic} alt={place.name} width="400px" />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
        <p className="text-center">
          <a
            href={`/places/${index}`}
            className="btn btn-primary"
            title="View details"
          >
            View
          </a>
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Hot spot places</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
