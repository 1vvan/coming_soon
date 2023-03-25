import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./AccessForm.css"

const AccessForm = ({showModal, setShowModal}) => {

    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    firebase.initializeApp({
        apiKey: "AIzaSyAN3NtYF8FN4jVySXY7ZS8G1ePSfPBWds4",
        authDomain: "coming-soon-7fb9b.firebaseapp.com",
        projectId: "coming-soon-7fb9b",
        storageBucket: "coming-soon-7fb9b.appspot.com",
        messagingSenderId: "494473097635",
        appId: "1:494473097635:web:26a6cb906cde6d22b76a16"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const accessCodesRef = firebase.firestore().collection("accessCodes");
        accessCodesRef.doc("codes").get()
        .then((doc) => {
            if (doc.exists) {
            const allowedCodes = doc.data().accessCode;
            if (allowedCodes.includes(code)) {
                // Пользователь имеет доступ к сайту
                localStorage.setItem("accessGranted", "true");
                window.location.href = "/available"; // Перенаправляем пользователя на главную страницу
            } else {
                // Код доступа недействительный
                setError("Invalid access code.");
            }
            } else {
            // Документ не найден
            setError("Access codes collection does not exist.");
            }
        })
        .catch((error) => {
            console.log(error);
            setError("Error checking access code. Please try again later.");
        });
    };




    return (
    <div className={showModal ? "access-modal active" : "access-modal"} onClick={() => setShowModal(false)}>
        <form onSubmit={handleSubmit} className={showModal ? "access-form active" : "access-form"} onClick={e => e.stopPropagation()}>
            <div className="access-form__title">
                    <h3>Enter access code</h3>
                    <button type='button' onClick={() => setShowModal(false)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="" />
                    </button>
            </div>
            <div className="access-form__input">
                <input className='form-control' type="text" id="code" onChange={(e) => setCode(e.target.value)} />
                {error && <p className='access-form__error'>{error}</p>}
            </div>
            <button className="btn btn-success" type="submit">Submit</button>
        </form>
    </div>
    );
}

export default AccessForm;
