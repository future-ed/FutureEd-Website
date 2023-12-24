import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export const addNotification = async (country, message) => {
    try {
        await addDoc(collection(db, 'notifications'), {
            country,
            message,
            created_timestamp: Timestamp.fromDate(new Date()) // Current timestamp
        });
        console.log("Notification added successfully!");
    } catch (error) {
        console.error('Error adding notification:', error);
    }
};