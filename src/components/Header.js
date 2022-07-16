import logo from '../assets/logo.svg'
import "../styles/blocks/logo.css"

export default function Header () {
    return (
      <header>
          <a  href="/" aria-label="Main"><img className="logo" src={logo}  alt="Logo"/></a>
      </header>
    )
  }
  


