import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import ContactIntro from "../components/contactIntro/contactIntro"
import GetInTouch from "../components/getintouch/getintouch"
import SendMessage from "../components/sendmessage/sendmessage"

function Contact() {
    return (
        <>
            <Header />

            <main className="main">
                <ContactIntro />
                <GetInTouch />
                <SendMessage />
            </main>

            <Footer />
        </>
    )
}

export default Contact