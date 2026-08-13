import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({ video, featured = false }) {
    return (
        <article className={`video-card ${featured ? "video-card--featured" : ""}`}>
            <Link to="/insights/videos" className="video-card__media-link" aria-label={`Watch ${video.title}`}>
                <div className="video-card__media">
                    <img src={video.image} alt="" className="video-card__image" />
                    <span className="video-card__shade" />
                    <span className="video-card__play"><Play size={featured ? 24 : 16} fill="currentColor" /></span>
                    <span className="video-card__duration">{video.duration}</span>
                </div>
            </Link>
            <div className="video-card__body">
                <span className="video-card__category">{video.category}</span>
                <h3 className="video-card__title">{video.title}</h3>
                {video.description && <p className="video-card__description">{video.description}</p>}
                <Link to="/insights/videos" className="video-card__watch">Watch <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
}

export default VideoCard;
