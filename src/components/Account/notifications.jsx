import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'; 

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'notifications'), orderBy('created_timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const notificationsArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNotifications(notificationsArray);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <p>{notification.message} - {notification.country} - {notification.created_timestamp.toDate().toString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
