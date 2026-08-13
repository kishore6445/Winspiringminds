import React from "react";
import {
    UserRound,
    Target,
    UsersRound,
    MessageCircle,
    Check
} from "lucide-react";

import "./about.css";

import sudhirImage from "../../../assets/images/about/sudhir.jpeg";


const focusAreas = [
    {
        icon: UserRound,
        title: "Personal Leadership",
        description:
            "Develop greater self-awareness, confidence, clarity, and effectiveness as a leader.",
    },
    {
        icon: Target,
        title: "Leadership Development",
        description:
            "Build the skills needed to lead people, navigate complexity, and take on greater responsibility.",
    },
    {
        icon: UsersRound,
        title: "Team & Organisation Growth",
        description:
            "Help teams work better together and create the conditions for stronger organisational performance.",
    },
    {
        icon: MessageCircle,
        title: "Culture & Conversations",
        description:
            "Transform everyday conversations, behaviours, and accountability into healthier workplace cultures.",
    },
];


const About = () => {
    return (
        <section className="about-section" id="about">

            <div className="about-container">

                {/* =========================================
                    LEFT — IMAGE
                ========================================= */}

                <div className="about-visual">

                    {/* Decorative background shape */}
                    <div className="about-image-shape" />

                    {/* Gold circle */}
                    <div className="about-gold-circle" />

                    <div className="about-image-wrapper">

                        <img
                            src={sudhirImage}
                            alt="Sudhir Koka"
                            className="about-image"
                        />

                    </div>


                    {/* Experience Card */}

                    <div className="about-experience-card">

                        <span className="about-experience-number">
                            25+
                        </span>

                        <span className="about-experience-label">
                            Years of Leadership
                            <br />
                            Experience
                        </span>

                    </div>

                </div>


                {/* =========================================
                    RIGHT — CONTENT
                ========================================= */}

                <div className="about-content">

                    {/* Label */}

                    <div className="about-label">
                        ABOUT SUDHIR
                    </div>


                    {/* Heading */}

                    <h2 className="about-heading">
                        Helping People Become
                        <br />
                        <span>Better Leaders.</span>
                    </h2>


                    {/* Intro */}

                    <p className="about-intro">
                        Leadership is built through intentional growth —
                        in how we think, communicate, make decisions, and
                        work with others.
                    </p>

                    <p className="about-description">
                        Sudhir works with individuals and organisations to
                        develop stronger leadership capabilities, build
                        high-performing teams, and create cultures where
                        people and businesses can grow together.
                    </p>


                    {/* Focus Areas */}

                    <div className="about-focus-grid">

                        {focusAreas.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    className="about-focus-item"
                                    key={item.title}
                                >

                                    <div className="about-focus-icon">
                                        <Icon
                                            size={19}
                                            strokeWidth={2}
                                        />
                                    </div>


                                    <div className="about-focus-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>


                    {/* Signature */}

                    <div className="about-signature">

                        <div className="about-signature-line" />

                        <h3>
                            Sudhir Koka
                        </h3>

                        <p>
                            Leadership Coach &amp; People Development Partner
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;