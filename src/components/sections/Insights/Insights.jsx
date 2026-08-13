import { ArrowRight, Play } from "lucide-react";

import { insightsData } from "./insightsData";

import Button from "../../common/Button/Button";
import SectionLabel from "../../common/SectionLabel/SectionLabel";

import "./Insights.css";

function Insights() {
    const {
        section,
        categories,
        featuredVideo,
        featuredVideos,
        growthCircle,
    } = insightsData;

    return (
        <section
            className="insights"
            id="insights"
        >
            <div className="insights__container">

                {/* =========================================
                    SECTION HEADER
                ========================================= */}

                <div className="insights__header">

                    <div className="insights__header-kicker">

                        {/* <SectionLabel variant="gold">
                            <span className="insights__number">
                                {section.number}
                            </span>

                            <span className="insights__number-divider">
                                /
                            </span>

                            {section.label}
                        </SectionLabel> */}
                        <div className ="insights-kicker">
                        <span className = "insights-number">02</span>
                        <span>/</span>
                        <span>INSIGHTS</span>
                        </div>
                        <div className ="insights-header-line"/>
                        <h2 className="insights__title">
                            Leadership is not learned once.
                            <br />
                            It is{" "}
                            <span>
                                developed every day.
                            </span>
                        </h2>

                        <p className="insights__intro">
                            {section.description}
                        </p>

                    </div>

                    <a
                        href="#insights"
                        className="insights__browse"
                    >
                        <span>
                            {section.browseLabel}
                        </span>

                        <ArrowRight size={16} />
                    </a>

                </div>


                {/* =========================================
                    CATEGORY NAVIGATION
                ========================================= */}

                <div className="insights__categories">

                    {categories.map(
                        (category, index) => (
                            <button
                                key={category}
                                type="button"
                                className={`insights__category ${
                                    index === 0
                                        ? "insights__category--active"
                                        : ""
                                }`}
                            >
                                {category}
                            </button>
                        )
                    )}

                </div>


                {/* =========================================
                    MAIN CONTENT
                ========================================= */}

                <div className="insights__content">

                    {/* =====================================
                        LEFT COLUMN
                    ===================================== */}

                    <div className="insights__left">

                        {/* FEATURED VIDEO */}

                        <article className="featured-video">

                            <div className="featured-video__media">

                                <img
                                    src={
                                        featuredVideo.image
                                    }
                                    alt={
                                        featuredVideo.title
                                    }
                                    className="featured-video__image"
                                />

                                <div className="featured-video__overlay" />

                                <button
                                    type="button"
                                    className="featured-video__play"
                                    aria-label={`Play ${featuredVideo.title}`}
                                >
                                    <Play
                                        size={25}
                                        fill="currentColor"
                                    />
                                </button>

                                <span className="featured-video__duration">
                                    {featuredVideo.duration}
                                </span>

                            </div>


                            <div className="featured-video__content">

                                <span className="featured-video__category">
                                    {featuredVideo.category}
                                </span>

                                <h3 className="featured-video__title">
                                    {featuredVideo.title}
                                </h3>

                                <p className="featured-video__description">
                                    {featuredVideo.description}
                                </p>

                            </div>

                        </article>


                        {/* SMALL FEATURED VIDEOS */}

                        <div className="insights__featured-grid">

                            {featuredVideos.map(
                                (video) => (
                                    <article
                                        className="small-video"
                                        key={video.id}
                                    >

                                        <div className="small-video__media">

                                            <img
                                                src={video.image}
                                                alt={video.title}
                                                className="small-video__image"
                                            />

                                            <button
                                                type="button"
                                                className="small-video__play"
                                                aria-label={`Play ${video.title}`}
                                            >
                                                <Play
                                                    size={15}
                                                    fill="currentColor"
                                                />
                                            </button>

                                            <span className="small-video__duration">
                                                {video.duration}
                                            </span>

                                        </div>


                                        <div className="small-video__content">

                                            <span className="small-video__category">
                                                {video.category}
                                            </span>

                                            <h4 className="small-video__title">
                                                {video.title}
                                            </h4>

                                            <button
                                                type="button"
                                                className="small-video__watch"
                                            >
                                                <span>
                                                    Watch
                                                </span>

                                                <ArrowRight
                                                    size={14}
                                                />
                                            </button>

                                        </div>

                                    </article>
                                )
                            )}

                        </div>

                    </div>


                    {/* =====================================
                        RIGHT COLUMN
                    ===================================== */}

                    <aside className="growth-circle">

                        <div className="growth-circle__top">

                            <SectionLabel variant="gold">
                                {growthCircle.eyebrow}
                            </SectionLabel>

                            <h3 className="growth-circle__title">
                                {growthCircle.title}
                            </h3>

                            <p className="growth-circle__description">
                                {growthCircle.description}
                            </p>

                        </div>


                        {/* BENEFITS */}

                        <ul className="growth-circle__benefits">

                            {growthCircle.benefits.map(
                                (benefit) => (
                                    <li
                                        key={benefit}
                                        className="growth-circle__benefit"
                                    >
                                        <span className="growth-circle__check">
                                            ✓
                                        </span>

                                        <span>
                                            {benefit}
                                        </span>
                                    </li>
                                )
                            )}

                        </ul>


                        {/* FORM */}

                        <form className="growth-circle__form">

                            <div className="growth-circle__field">

                                <label htmlFor="growth-name">
                                    Name
                                </label>

                                <input
                                    id="growth-name"
                                    type="text"
                                    placeholder={
                                        growthCircle.form
                                            .namePlaceholder
                                    }
                                />

                            </div>


                            <div className="growth-circle__field">

                                <label htmlFor="growth-email">
                                    Email
                                </label>

                                <input
                                    id="growth-email"
                                    type="email"
                                    placeholder={
                                        growthCircle.form
                                            .emailPlaceholder
                                    }
                                />

                            </div>


                            <Button
                                type="submit"
                                variant="primary"
                                icon={ArrowRight}
                                className="growth-circle__submit"
                            >
                                {
                                    growthCircle.form
                                        .buttonLabel
                                }
                            </Button>

                        </form>

                    </aside>

                </div>

            </div>
        </section>
    );
}

export default Insights;