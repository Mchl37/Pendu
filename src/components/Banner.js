import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <img src={logo} alt='Pendu logo' className='banner-logo' />
            <h1 className='banner-title'>Le Pendu</h1>
        </div>
    )
}

export default Banner