import firebase_app from "../config";
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";

export default function snapshotToArray(snapshot) {
    const returnArray = [];

    snapshot.forEach((doc) => {
        returnArray.push(doc.data());
    });

    return returnArray;
}
