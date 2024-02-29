import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const contactFirestore = () => {

    projectFirestore.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
};

export default contactFirestore;