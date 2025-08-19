
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Menu from './Menu'

export default function AdminIndex() {
  return (
    <div className=''>
        <Header />
      <div className="container">
        <div className="left">
          <Menu />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  )
}
