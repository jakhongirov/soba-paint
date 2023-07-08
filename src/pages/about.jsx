import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import AboutIntro from "../components/aboutIntro/aboutIntro"
// import Plan from "../components/plan/plan"
import Company from "../components/company/company"
import Certificates from "../components/certificates/certificates"
import Team from "../components/team/team"
// import Awards from "../components/awards/awards"

function About() {
    return (
        <>
            <Header />

            <main className="main">
                <AboutIntro />
                <Company />
                <Certificates />
                <Team />
                {/* <Awards /> */}
            </main>

            <Footer />
        </>
    )
}

export default About