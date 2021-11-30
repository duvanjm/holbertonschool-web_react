const { Map } = require('immutable');

function getImmutableObject(object) {
  const map1 = Map(object);
  return map1;
}

export default getImmutableObject;
