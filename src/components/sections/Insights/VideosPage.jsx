import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { insightsData } from "./insightsData";
import VideoCard from "./VideoCard";
import "./VideosPage.css";

function VideosPage() {
    return (
        <main className="videos-page">
            <div className="videos-page__container">
                <Link to="/" className="videos-page__back"><ArrowLeft size={17} /> Back to Insights</Link>
                <div className="videos-page__kicker">02 / Insights / Videos</div>
                <h1>Leadership videos for the work that matters.</h1>
                <p className="videos-page__intro">A practical library of ideas, frameworks and conversations to help leaders build better organisations.</p>
                <div className="videos-page__sections">
                    {insightsData.videoSections.map((section) => (
                        <section className="video-section" key={section.number}>
                            <div className="video-section__heading"><span>{section.number} / {section.label}</span><h2>{section.heading}</h2></div>
                            <div className="video-section__grid">{section.videos.map((title, index) => <VideoCard key={title} video={{ title, category: section.label, duration: ["06:24", "05:31", "07:15", "04:48"][index], image: insightsData.featuredVideos[index % insightsData.featuredVideos.length].image }} />)}</div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default VideosPage;
