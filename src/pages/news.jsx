import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import NewsIntro from "../components/newsIntro/newsIntro"
// import Plan from "../components/plan/plan"
import Company from "../components/company/company"
import NewsList from "../components/news/news"

function News() {
    return (
        <>
            <Header />
            <main className="main">
                <NewsIntro />
                <Company />
                <NewsList />
            </main>

            <Footer />
        </>
    )
}

export default News