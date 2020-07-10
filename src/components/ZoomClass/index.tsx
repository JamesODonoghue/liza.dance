import React, { Fragment } from 'react';
import nagataPhoto from 'assets/photos/kids.jpg';
import './styles.css';
export const ZoomClass = () => (
    <Fragment>
        <div className="custom-shape-divider-top">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
                    className="shape-fill"
                ></path>
            </svg>
        </div>
        <section className="zoom-section">
            <div>
                <img src={nagataPhoto} alt="Liza teaching kids"></img>
            </div>
            <div>
                <h1>Dance with Ms. Liza!</h1>
                <p>Ms. Liza is private lessons upon request. Support a local independent teaching artist!</p>
                <h3>
                    <b>Private Lessons</b>
                </h3>
                <p>
                    Email{' '}
                    <b>
                        <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class">
                            liza.kroeschell@gmail.com
                        </a>
                    </b>{' '}
                    for more information about individualized dance instruction tailored to your child’s interests and
                    goals.
                </p>

                <div>
                    <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class">
                        <button>Schedule a private class!</button>
                    </a>
                </div>
            </div>
        </section>
    </Fragment>
);
