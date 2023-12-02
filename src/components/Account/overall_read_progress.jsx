import { useEffect, useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { onSnapshot, collection, query } from 'firebase/firestore';

export const useOverallReadProgress = () => {
    const [readPercentage, setReadPercentage] = useState(0);
    const { user } = UserAuth();

    useEffect(() => {
        if (!user?.email) return;

        const readProgressRef = collection(db, 'users', user.email, 'read progress');
        const q = query(readProgressRef);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let totalRead = 0;
            let totalCount = 0;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                totalRead += Object.values(data).filter(value => value === true).length;
                totalCount += Object.keys(data).length;
            });

            if (totalCount > 0) {
                const percentage = Math.round((totalRead / totalCount) * 100);
                setReadPercentage(percentage);
            }
        });

        return () => unsubscribe();
    }, [user?.email]);

    return readPercentage;
};
