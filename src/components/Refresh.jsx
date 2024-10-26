
import React, { useState, useEffect } from 'react';
import Location from '../components/Location.jsx';
import Contact from '../components/Contact.jsx';
import State from '../components/State.jsx';
import Country from '../components/Country.jsx';
import Age from '../components/Age.jsx';


const Refresh = () => {
    // Zustand für deine API-Daten
    const [randomUserData, setrandomUserData] = useState(null);

    // Funktion zum Abrufen der API-Daten
    const fetchUserData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            console.log('API-Daten aktualisiert!');

            // Hier setzt du den Zustand mit den erhaltenen Benutzerdaten
            setrandomUserData(data.results[0]); // Da die API ein Array mit Ergebnissen zurückgibt, nehmen wir das erste Element
        } catch (error) {
            console.error('Abrufen der API-Daten Fehlgeschlagen:', error);
        }
    };

    // useEffect zum Initiieren des Intervalls
    useEffect(() => {
        // Initial die API-Daten abrufen
        fetchUserData();

        // Intervall alle 3 Sekunden für das Aktualisieren der API-Daten
        const intervalId = setInterval(() => {
            fetchUserData();
        }, 3000)

        // Aufräumen: Interval stoppen, wenn die Komponente unmontiert wird
        return () => clearInterval(intervalId);
    }, []); // Leeres Array als zweites Argument stellt sicher, dass der Effekt nur einmal beim Laden der Komponente ausgeführt wird


    // Ich muss wegen "Refresh client:load" die Testimonial Seite jedes mal manuell Refreshen damit 
    // die API startet
    // setTimeout(() => {
    //     console.log();
    // }, 1);

    // Hier kannst du den Rest deiner JSX-Komponente mit den API-Daten rendern
    return (
        <>
            {/* <b><h4 className="">{pageTitle}</h4></b> */}
            {/* Hier kannst du die API-Daten in deinem JSX verwenden */}
            {randomUserData && (
                <section
                    className="font-roboto mx-auto mt-20 w-full flex flex-row justify-center items-center pt-12"
                >
                    <section className="card w-96 mx-auto dark:text-dark border bg-indigo-300 rounded shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                        <img
                            className="w-32 mx-auto rounded-full -mt-20 border-8 border-stone-300"
                            src={randomUserData.picture.large}
                            alt="Fotos von Gesichtern"
                        />
                        <article className="text-center mt-2 text-3xl font-medium">
                            {randomUserData.name.first}{" "}
                            {randomUserData.name.last}
                        </article>
                        <article className="text-center mt-2 font-light text-sm">
                            {randomUserData.login.username}
                        </article>
                        <hr className="mt-8" />
                        <article className="text-center font-normal text-lg">
                            <Location city={randomUserData.location.city} />
                            <State state={randomUserData.location.state} />
                            <Country country={randomUserData.location.country} />
                            <Age age={randomUserData.dob.age} />
                            <Contact client="load" email={randomUserData.email} />
                        </article>
                    </section>
                </section>
            )
            }
        </ >
    );
};

export default Refresh;