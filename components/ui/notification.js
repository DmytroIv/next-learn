import { useContext } from 'react';
import NotificationContext from '@/context/notification-context';

const Notification = ({ text, status }) => {
  const notificationContext = useContext(NotificationContext);

  return (
    <div onClick={notificationContext.hideNotification} className={`notification ${status}`}>
      {text}
    </div>
  );
};

export default Notification;
