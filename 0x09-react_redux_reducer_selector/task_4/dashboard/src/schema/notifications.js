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
  const result = [];
  const notificationsObj = normalizedData.entities.notifications;
  const messagesObj = normalizedData.entities.messages;
  for (const notificationId in notificationsObj) {
    if (notificationsObj[notificationId].author === userId) {
      const contextId = notificationsObj[notificationId].context;
      result.push(messagesObj[contextId]);
    }
  }
  return result;
}

function notificationsNormalizer(data) {
  return normalize(data, mySchema);
}

export { getAllNotificationsByUser, normalizedData, notificationsNormalizer };
