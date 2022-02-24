import { CSSProperties } from 'react'
import BoozeCard from '../components/BoozeCard/BoozeCard'
import CardsContainer from '../components/CardsContainer/CardsContainer'
import SearchForDrinks from '../components/Search/SearchForDrinks'

function StartPage() {
  return (
    <>
      <SearchForDrinks />
      <div style={rootStyle}>
        <BoozeCard title="gin" />
        <BoozeCard title="vodka" />
        <BoozeCard title="bourbon" />
      </div>
      <CardsContainer />
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
