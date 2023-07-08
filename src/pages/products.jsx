import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import ProductsIntro from "../components/productsIntro/productsIntro"
import ProductsList from "../components/productsList/productsList"

function Products() {
    return (
        <>
            <Header />

            <main className="main">
                <ProductsIntro />
                <ProductsList />

            </main>

            <Footer />
        </>
    )
}

export default Products