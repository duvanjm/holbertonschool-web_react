import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  if (page1 === page2) {
    return map1.merge(map2);
  }
  return map1.concat(map2);
}
