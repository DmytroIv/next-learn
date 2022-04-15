import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    if (activeNotification) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData) => {
    setActiveNotification({
      text: notificationData.text,
      status: notificationData.status,
    });
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>;
}

export default NotificationContext;
