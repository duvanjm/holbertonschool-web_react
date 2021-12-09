import notifications from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  const lst = notifications
    .filter((id) => id.author.id === userId)
    .map((id) => id.context);
  return lst
}
