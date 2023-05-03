const React = require('react')
const Def = require('../default')

function show(place) {
  return (
    <Def>
      <main>
        <h1>{place.name}</h1>
      </main>

      <a href={`/places/${place.id}/edit`} className="btn btn-warning">
        Edit
      </a>

      <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>


    </Def>
  )
}

module.exports = show
