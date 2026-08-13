import { heroData } from "../../../data/heroData";

import Button from "../../common/Button/Button";
import SectionLabel from "../../common/SectionLabel/SectionLabel";

import "./Hero.css";

function Hero() {
    const {
        eyebrow,
        title,
        description,
        buttons,
        image,
        purpose,
        belief,
    } = heroData;

    return (
        <section
            className="hero"
            id="home"
        >
            <div className="hero__container">

                {/* =========================================
                    MAIN HERO CONTENT
                ========================================= */}

                <div className="hero__main">

                    {/* LEFT CONTENT */}

                    <div className="hero__content">

                        <SectionLabel variant="gold">
                            {eyebrow}
                        </SectionLabel>

                        <h1 className="hero__title">
                            <span className="hero__title-line hero__title-line--white">
                                {title.lineOne}
                            </span>

                            <span className="hero__title-line hero__title-line--white">
                                {title.lineTwo}
                            </span>

                            <span className="hero__title-line hero__title-line--gold">
                                {title.lineThree}
                            </span>
                        </h1>

                        <p className="hero__description">
                            {description}
                        </p>

                        <div className="hero__actions">

                            <Button
                                variant="primary"
                                href={buttons.primary.href}
                                icon={buttons.primary.icon}
                            >
                                {buttons.primary.label}
                            </Button>

                            <Button
                                variant="secondary"
                                icon={buttons.secondary.icon}
                            >
                                {buttons.secondary.label}
                            </Button>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}

                    <div className="hero__visual">

                        <div className="hero__image-wrapper">

                            <img
                                src={image}
                                alt="Leadership advisor"
                                className="hero__image"
                            />

                        </div>

                        {/* Decorative growth graphic */}

                        <div
                            className="hero__growth-graphic"
                            aria-hidden="true"
                        >
                            <span className="hero__growth-bar hero__growth-bar--one" />
                            <span className="hero__growth-bar hero__growth-bar--two" />
                            <span className="hero__growth-bar hero__growth-bar--three" />

                            <svg
                                className="hero__growth-line"
                                viewBox="0 0 320 180"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 145 L82 105 L145 130 L205 65 L258 88 L310 15"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M290 20 L310 15 L305 36"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </div>

                    </div>

                </div>


                {/* =========================================
                    PURPOSE / BELIEF
                ========================================= */}

                <div className="hero__principles">

                    <article className="hero__principle hero__principle--purpose">

                        <SectionLabel variant="gold">
                            {purpose.label}
                        </SectionLabel>

                        <p className="hero__principle-text">
                            {purpose.text}
                        </p>

                        <span className="hero__principle-line" />

                    </article>


                    <article className="hero__principle hero__principle--belief">

                        <SectionLabel variant="gold">
                            {belief.label}
                        </SectionLabel>

                        <p className="hero__principle-text">
                            {belief.text}
                        </p>

                        <span className="hero__principle-line" />

                    </article>

                </div>

            </div>
        </section>
    );
}

export default Hero;