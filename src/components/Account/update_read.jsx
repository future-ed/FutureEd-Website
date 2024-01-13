import { useState, useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const useReadStatus = (chapterDocument) => {
    const [readStatuses, setReadStatuses] = useState({});
    const { user } = UserAuth();

    useEffect(() => {
        const fetchReadStatuses = async () => {
            if (user?.email && chapterDocument) {
                const chapterDocRef = doc(db, 'users', user.email, 'read progress', chapterDocument);
                const docSnap = await getDoc(chapterDocRef);
                if (docSnap.exists()) {
                    setReadStatuses(docSnap.data());
                }
            }
        };

        fetchReadStatuses();
    }, [user, chapterDocument]);

    const toggleReadStatus = async (subChapterName) => {
        setReadStatuses(prev => {
            const newStatus = !prev[subChapterName];
            const updatedStatuses = { ...prev, [subChapterName]: newStatus };
    
            // Update Firestore document
            if (user?.email && chapterDocument) {
                const chapterDocRef = doc(db, 'users', user.email, 'read progress', chapterDocument);
                updateDoc(chapterDocRef, { [subChapterName]: newStatus }).catch(error => {
                    console.error("Error updating document: ", error);
                });
            }
    
            return updatedStatuses;
        });
    };

    return [readStatuses, toggleReadStatus];
};