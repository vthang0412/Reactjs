import "./app.css"
import Article from './Article'
import Cart from './Cart'
import Header from './Header'
import Menu from './Menu'
import Navigation from './Navigation'

export default function UserLayout() {
    return (
        <>
            <Header />
            <Navigation />
            <main className='container'>
                <Menu />
                <section className='content'>
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                </section>
                <Article />
            </main>
        </>


    )
}
