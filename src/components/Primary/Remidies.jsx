import React from 'react';
import { Link } from "react-router-dom";
import "./Remidies.scss";

const Remidies = () => {
  return (
    <>
        <div id="container">
        <nav id="navbar">
            <ul>
            <ul>
				<li><Link to='/login'>Login</Link></li>

				<li><Link to='/Assignment'>Assignment Section</Link></li>

				<li><Link to='/Blogs'>Blogs</Link></li>

				<li><Link to='/Remidies'>Remedies</Link></li>
			</ul>
            </ul>
        </nav>
        </div>

    <div class="row">

        <h1>Counselling for student mental health problems</h1>
        <div id="col1">
            <img src="https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,g_faces:auto,q_auto:eco,w_1500/v1/yale-medicine/live-prod/ym_new/images/3e4a41d0-17fb-4dbf-ba9e-c0b94abef3c8_tcm990-386931.jpg" alt="" width="700px" height="450px" />
        </div>
        <div id="col2">
            <h3>Mental health problems are as common among students as they are in the general population.</h3>
            <p>Anyone who has new challenges as a student could benefit from talking to someone. This includes if
                you
                have:
                <br />
                -friend, family or relationship issues <br />

                -low mood or losing interest in things you enjoy <br />
                -stress or anxiety about your work or anything else <br />
                Counselling can help you understand these issues and suggest strategies for dealing with your
                feelings.
            </p>
            <br />

            <h1>1.Where to go for help</h1>
            <h3>Talk to someone</h3>
            <p>It's important to tell someone how you feel as this may bring an immediate sense of relief.

                You could speak to a:
                <br />
                -friend
                <br />
                -member of your family
                <br />
                -university tutor
                <br />
                -counsellor
                <br />
                -doctor
                <br />
                A tutor may also be able to help you get in touch with university or other counselling services.
            </p>
            <br />
            <h1>2.University counselling services</h1>
            <p>
                Many colleges and most universities have a free and confidential in-house counselling service you
                can
                access,
                with
                professionally qualified counsellors and psychotherapists.

                You can usually find out what they offer and how to make an appointment in the counselling service
                section
                of
                your
                university's website. This free service in universities is available to both undergraduates and
                postgraduates.

                Many universities also have a mental health adviser who can help you access the support you need.

                As well as counselling or therapy, you may also be entitled to "reasonable adjustments" such as
                extra
                time
                in
                exams,
                extensions on coursework, and specialist mental health mentor support.</p>
            <br />
            <h1>3.Therapy and counselling</h1>
            <p>Counselling and cognitive behavioural therapy (CBT) offer an opportunity to explore your feelings in
                a
                safe
                environment and help you develop ways of coping with them.

                As well as university or college counselling services, you might be able to refer yourself for NHS
                counselling.
                Search for psychological therapy services to find out what's available in your area.

                The University Mental Health Advisers Network (UMHAN) represents the network of mental health
                advisers
                working
                in higher education dedicated to providing practical support to students experiencing mental health
                difficulties.</p>
        </div>
    </div>
    </>
  )
}

export default Remidies;
