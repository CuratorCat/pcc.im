import Link from 'next/link'

let data = require('./explore-data.json')

export function ExpoloreEns() {
  return (
    <>
      <h4 className="text-xl uppercase text-white/50 font-bold tracking-wider">Explore</h4>
      <List />
    </>
  )
}

function List() {
  return (
    <>
      {data.map((section: { title: string; ens: [] }, i: number) => (
        <div key={i}>
          <h5 className="mt-2 font-semibold">{section.title}</h5>
          <p>
            {section.ens.map((ens, j) => (
              <Link href={'/' + ens} key={j}>
                <a className="example-links">{ens}</a>
              </Link>
            ))}
          </p>
        </div>
      ))}
    </>
  )
}
