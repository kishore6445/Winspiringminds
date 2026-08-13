import { FileText, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { insightsData } from "./insightsData";
import VideoCard from "./VideoCard";
import "./Insights.css";

function Insights() {
    const { section, featuredVideo, featuredVideos } = insightsData;
    return (
        <section className="insights" id="insights">
            <div className="insights__container">
                <header className="insights__header">
                    <div>
                        <div className="insights-kicker"><span>{section.number}</span><span>/</span><span>{section.label.toUpperCase()}</span></div>
                        <div className="insights-header-line" />
                        <h2 className="insights__title">Every business challenge has a <span>people story.</span></h2>
                        <p className="insights__intro">{section.description}</p>
                    </div>
                </header>
                <nav className="insights__categories" aria-label="Insight categories">
                    <Link className="insights__category insights__category--active" to="/insights/videos"><Play size={18} /> <span>Videos</span></Link>
                    <Link className="insights__category" to="/insights/articles"><FileText size={18} /> <span>Articles</span></Link>
                    <Link className="insights__category" to="/insights/reflections"><Sparkles size={18} /> <span>Reflections</span></Link>
                </nav>
                <div className="insights__content">
                    <VideoCard video={featuredVideo} featured />
                    <div className="insights__side-list">{featuredVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
                </div>
            </div>
        </section>
    );
}

export default Insights;
