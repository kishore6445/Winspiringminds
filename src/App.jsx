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
function App() {
    return (
        <>
            <Navbar />
            
            <main>
                <Hero />
                <Insights/>
                <Challenges/>
                <Framework/>
                <Services/>
                <Conversation/>
                <About/>
                <CTA/>
                <Footer/>
            </main>
        </>
    );
}

export default App;