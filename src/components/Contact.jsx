import React from 'react';

const Contact = ({ email }) => {
    return (
        <section>
            <p><b>Email: </b>{email}</p>
            <hr className="mb-8" />
            <h4>Ich kann nur eines sagen:</h4><br />
            <p className="text-3xl" id="rocket">...Astro ist Mega 🚀</p>
        </section >
    );
};

export default Contact;

