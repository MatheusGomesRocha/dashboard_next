import { createContext, ReactNode, useState } from 'react';

type Notification = {
    id: number;
    content: string;
    by: string;
    time: string;
}

type NotificationData = {
    notificationList: Notification[];
    setNotificationEffect: (notification: Notification[]) => void;
}

type NotificationDataProvider = {
    children: ReactNode
}

export const NotificationContext = createContext({} as NotificationData);

export function NotificationContextProvider({children}: NotificationDataProvider) {
    const [notificationList, setNotificationList] = useState([]);

    function setNotificationEffect(notification: Notification[]) {
        setNotificationList(notification);
    }
        
    return(
        <NotificationContext.Provider value={{
            notificationList,
            setNotificationEffect
        }}>
            {children}
        </NotificationContext.Provider>
    )
}