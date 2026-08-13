import imageA from "../../../assets/images/hero/hero-image.png";
import imageB from "../../../assets/images/hero/hero-image1.png";
import imageC from "../../../assets/images/about/sudhir.jpeg";

export const insightsData = {
    section: { number: "02", label: "Insights", title: "Leadership is not learned once. It is developed every day.", description: "Practical leadership ideas, articles, videos and reflections drawn from decades of working with leaders and organisations." },
    featuredVideo: { category: "Leadership", title: "Why Great Performers Don't Always Become Great Leaders", description: "Discover why technical excellence alone doesn't create effective leadership and how to develop the mindset required to lead people successfully.", duration: "06:24", image: imageA },
    featuredVideos: [
        { id: 1, category: "Organisation", title: "Every Business Problem Has a People Story", duration: "05:31", image: imageB },
        { id: 2, category: "Teams", title: "The Leadership Mistakes That Quietly Destroy Team Performance", duration: "07:15", image: imageC },
        { id: 3, category: "Leadership", title: "Leading With Clarity When It Matters Most", duration: "04:48", image: imageA },
    ],
    videoSections: [
        { number: "01", label: "Leadership Foundations", heading: "Build the mindset of a great leader.", videos: ["What Great Leadership Really Means", "The Mindset Shift From Performer to Leader", "Building Leadership Confidence", "Leading With Clarity"] },
        { number: "02", label: "Teams & Performance", heading: "Create teams that perform with purpose.", videos: ["The Leadership Mistakes That Quietly Destroy Team Performance", "How Great Leaders Build High-Performance Teams", "Creating Accountability Without Micromanaging", "Turning Conflict Into Better Teamwork"] },
        { number: "03", label: "Practical Leadership Frameworks", heading: "Turn leadership ideas into daily practice.", videos: ["The Leadership Decision Framework", "The Feedback Framework", "The Difficult Conversation Framework", "The Delegation Framework"] },
        { number: "04", label: "Leadership Voices", heading: "Learn from leaders who have lived it.", videos: ["Leadership Lessons From Experience", "Conversations With Great Leaders", "Building Organizations That Last", "What Emerging Leaders Need to Know"] },
    ],
};
