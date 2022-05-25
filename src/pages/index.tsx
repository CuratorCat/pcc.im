import { Search } from 'components/Search'
import { LayoutHome } from 'layouts/Layout'
import { ExpoloreEns } from 'components/ExploreEns'

export default Home

function Home() {
  return (
    <>
      <LayoutHome>
        <Search />
        <ExpoloreEns />
      </LayoutHome>
    </>
  )
}
