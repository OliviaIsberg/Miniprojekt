import './Header.css'
import GetRandomDrink from '../RandomDrink/RandomDrink'

function Header() {
  return (
    <div className="headerContainer">
      <header>
        <h1 className="headerHeading">Header</h1>
      </header>
      <GetRandomDrink />
    </div>
  )
}

export default Header
