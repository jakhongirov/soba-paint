import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Intro from "../components/intro/intro"
import Services from "../components/services/services"
import Categories from "../components/categories/categories"
import Products from "../components/products/products"
// import Popular from "../components/popular/popular"
// import Plan from "../components/plan/plan"
import Company from "../components/company/company"
import HomeNews from "../components/homeNews/homeNews"

function HomePage() {
    return (
        <>
            <Header />

            <main className="main">
                <Intro />
                <Services />
                <Products />
                <Categories />
                {/* <Popular /> */}
                <Company />
                <HomeNews />
            </main>

            <Footer />
        </>
    )
}

export default HomePage