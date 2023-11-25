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
        const currentStatus = readStatuses[subChapterName];
        const newStatus = !currentStatus;

        setReadStatuses(prev => ({ ...prev, [subChapterName]: newStatus }));

        if (user?.email && chapterDocument) {
            const chapterDocRef = doc(db, 'users', user.email, 'read progress', chapterDocument);
            await updateDoc(chapterDocRef, { [subChapterName]: newStatus });
        }
    };

    return [readStatuses, toggleReadStatus];
};