import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Insights from "./components/sections/Insights/Insights";
import Challenges from "./components/sections/Challenges/Challenges";
import Framework from "./components/sections/Framework/Framework";
import Services from "./components/sections/Services/Services";
import Conversation from "./components/sections/Conversation/Conversation"
import About from "./components/sections/About/About"
import CTA from "./components/sections/CTA/CTA"
import Footer from "./components/layout/Footer/Footer"
import VideosPage from "./components/sections/Insights/VideosPage"
import ContentLibrary from "./components/sections/Insights/ContentLibrary"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Insights />
                <Challenges />
                <Framework />
                <Services />
                <Conversation />
                <About />
                <CTA />
                <Footer />
            </main>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/insights" element={<><Navbar light /><Insights /></>} />
                <Route path="/insights/videos" element={<><Navbar light /><VideosPage /></>} />
                <Route path="/insights/articles" element={<><Navbar light /><ContentLibrary type="articles" /></>} />
                <Route path="/insights/reflections" element={<><Navbar light /><ContentLibrary type="reflections" /></>} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
