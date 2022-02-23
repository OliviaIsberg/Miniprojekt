
import { CSSProperties } from 'react'
import BoozeCard from '../components/BoozeCard/BoozeCard'
import Header from '../components/Header'
import SearchForDrinks from "../components/SearchForDrinks";

function StartPage() {
  return (
    <>
      <Header />
    <SearchForDrinks />
      <div style={rootStyle}>
        <BoozeCard title="gin" />
        <BoozeCard title="vodka" />
        <BoozeCard title="bourbon" />
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
