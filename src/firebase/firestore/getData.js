import firebase_app from "../config";
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";
import snapshotToArray from '@/src/firebase/firestore/snapshotToArray';

const db = getFirestore(firebase_app)
export default async function getData(collection_str, id) {

    if (id === 'all') {
        const colRef = collection(db, collection_str);

        let result = null;
        let error = null;

        try {
            result = await getDocs(colRef);
        } catch (e) {
            error = e;
            return { result, error };
        }

        // console.log(Object.keys(result));
        // result.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });

        const list = snapshotToArray(result);
        // console.log(list[0]);

        return { list, error };
    }
    else {

        const docRef = doc(db, collection_str, id);

        let result = null;
        let error = null;

        try {
            result = await getDoc(docRef);
        } catch (e) {
            error = e;
        }

        console.log(Object.keys(result));

        return { result, error };
    }
}
