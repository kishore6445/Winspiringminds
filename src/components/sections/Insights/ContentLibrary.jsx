import { ArrowLeft, ArrowRight, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./ContentLibrary.css";

const content = {
  articles: {
    eyebrow: "Leadership articles",
    title: "Ideas worth returning to.",
    intro: "Practical articles for the moments when leadership asks you to think more clearly and act with purpose.",
    icon: FileText,
    items: ["Why Great Performers Don't Always Become Great Leaders", "The Quiet Work of Building Trust", "How to Lead Through Uncertainty", "The Difference Between Direction and Control", "What Accountability Looks Like in Practice", "Making Better Decisions With Your Team", "The Leadership Habits That Compound", "How to Give Feedback People Can Use"]
  },
  reflections: {
    eyebrow: "Leadership reflections",
    title: "A little space to think.",
    intro: "Short reflections on the human side of leadership, work and the organisations we build together.",
    icon: Sparkles,
    items: ["The Leader You Are Becoming", "When Listening Is the Most Useful Action", "A Note on Courage at Work", "The Stories Teams Tell Themselves", "What We Notice Shapes What We Lead", "The Practice of Staying Curious", "Leading Without Having Every Answer", "The Work Behind the Work"]
  }
};

export default function ContentLibrary({ type }) {
  const page = content[type] || content.articles;
  const Icon = page.icon;
  return <main className="content-library"><div className="content-library__container">
    <Link to="/#insights" className="content-library__back"><ArrowLeft size={17} /> Back to Insights</Link>
    <div className="content-library__hero"><span className="content-library__icon"><Icon size={22} /></span><span className="content-library__eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p></div>
    <div className="content-library__list" aria-label={page.eyebrow}>{page.items.map((item, index) => <article className="content-library__item" key={item}><span className="content-library__number">{String(index + 1).padStart(2, "0")}</span><div><span className="content-library__meta">{type === "articles" ? "Article" : "Reflection"}</span><h2>{item}</h2><p>{type === "articles" ? "A practical perspective for leaders who want to make the work better." : "A short pause to notice what leadership is asking of you today."}</p></div><button type="button" aria-label={`Open ${item}`}><ArrowRight size={19} /></button></article>)}</div>
  </div></main>;
}
