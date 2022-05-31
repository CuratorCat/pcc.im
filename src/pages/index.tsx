import { LayoutHome } from 'layouts'
import { Search } from 'components/Search'
import { ExpoloreEns } from 'components/ExploreEns'

export default function Home() {
  return (
    <>
      <LayoutHome>
        <Search />
        <ExpoloreEns />
      </LayoutHome>
    </>
  )
}
