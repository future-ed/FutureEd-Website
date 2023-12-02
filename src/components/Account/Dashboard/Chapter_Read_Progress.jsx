import { useEffect, useState } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import { onSnapshot, doc } from 'firebase/firestore';

export const useChapterReadProgress = (chapterName) => {
    const [chapterReadPercentage, setChapterReadPercentage] = useState(0);
    const { user } = UserAuth();

    useEffect(() => {
        if (!user?.email || !chapterName) return;

        // Reference to the specific document for the chapter
        const chapterDocRef = doc(db, 'users', user.email, 'read progress', chapterName);

        const unsubscribe = onSnapshot(chapterDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                const chapterTotalRead = Object.values(data).filter(value => value === true).length;
                const chapterTotalCount = Object.keys(data).length;

                if (chapterTotalCount > 0) {
                    const percentage = Math.round((chapterTotalRead / chapterTotalCount) * 100);
                    setChapterReadPercentage(percentage);
                }
            } else {
                // Handle the case where the document does not exist
                setChapterReadPercentage(0);
            }
        });

        return () => unsubscribe();
    }, [user?.email, chapterName]);

    return chapterReadPercentage;
};
