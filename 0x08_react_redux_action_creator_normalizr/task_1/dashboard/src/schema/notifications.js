import notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity('messages', {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications',{
  author: user,
  context: message
});

const mySchema = [notification];
const normalizedData = normalize(notifications, mySchema);

function getAllNotificationsByUser(userId) {
  const lst = notifications
    .filter((id) => id.author.id === userId)
    .map((id) => id.context);
  return lst
}

export {getAllNotificationsByUser, normalizedData};
