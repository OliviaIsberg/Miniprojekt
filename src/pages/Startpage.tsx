import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import BoozeCard from '../components/BoozeCard/BoozeCard'
import SearchForDrinks from '../components/Search/SearchForDrinks'

function StartPage() {
  return (
    <>
      <SearchForDrinks />
      <div style={rootStyle}>
        <Link to="/alcohol/gin">
          <BoozeCard title="gin" />
        </Link>
        <Link to="/alcohol/vodka">
          <BoozeCard title="vodka" />
        </Link>
        <Link to="/alcohol/bourbon">
          <BoozeCard title="bourbon" />
        </Link>
      </div>
    </>
  )
}

const rootStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  padding: '2rem',
}

export default StartPage
