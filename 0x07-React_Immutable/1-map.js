import { Map } from 'inmutable';

function getImmutableObject(object) {
  return Map(object)
}

export default getImmutableObject;
