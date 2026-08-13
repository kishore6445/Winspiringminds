export const insightsData = {
  section: {
    number: "02",
    label: "Insights",

    title: "Leadership is not learned once. It is developed every day.",

    description:
      "Practical leadership ideas, articles, videos and reflections drawn from decades of working with organisations.",

    browseLabel: "Browse all insights",
  },

  categories: [
    "Videos",
    "Articles",
    "Reflections",
    "Your Story",
    "Leadership Voices",
  ],

  featuredVideo: {
    category: "Leadership",

    title: "Why Great Performers Don't Always Become Great Leaders",

    description:
      "The instincts that make someone excellent individually can actively work against them the moment they lead others.",

    duration: "06:24",

    // We will replace this with the actual YouTube ID later.
    youtubeId: "",

    // Temporary image for UI development.
    image: "/assets/images/insights/featured-video.jpg",
  },

  featuredVideos: [
    {
      id: 1,

      category: "Organisation",

      title: "Every Business Problem Has a People Story",

      duration: "05:31",

      youtubeId: "",

      image: "/assets/images/insights/video-1.jpg",
    },

    {
      id: 2,

      category: "Teams",

      title:
        "The Leadership Mistakes Destroy Team Performance",

      duration: "07:15",

      youtubeId: "",

      image: "/assets/images/insights/video-2.jpg",
    },
  ],

  growthCircle: {
    eyebrow: "Join the Growth Circle",

    title: "Grow your leadership. Strengthen your organisation.",

    description:
      "Receive practical leadership ideas, frameworks and new videos designed to help you become a stronger leader.",

    benefits: [
      "Leadership insights",
      "Practical frameworks",
      "New videos",
      "Leadership reflections",
    ],

    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      buttonLabel: "Join the Growth Circle",
    },
  },
};