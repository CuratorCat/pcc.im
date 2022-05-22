import Head from 'next/head'

export default Home

function Home() {
  return (
    <div>
      <Head>
        <title>pcc.im ENS profile</title>
        <meta name="description" content="pcc.im ENS profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  )
}

function Main() {
  return (
    <div className="flex justify-center items-center">
      <div className="m-auto max-w-3xl flex flex-col min-h-[100vh] sm:mt-16 sm:mx-16 sm:min-h-[40vh] bg-[#473A74] sm:rounded-xl text-white">
        <header className="flex items-center p-6">
          <h1 className="text-4xl font-medium tracking-wider">
            <span className="hidden">pcc.im</span>
            <p className="text-2xl tracking-wide">ens profile</p>
          </h1>
        </header>

        <main className="flex flex-col flex-1 px-6">
          <article className="">
            <div className="bg-white text-violet-700 p-3 my-5 text-xl rounded">Search ENS / Address</div>

            <h4 className="text-lg uppercase">Examples</h4>
            <h5 className="mt-2 font-semibold">ENS Names</h5>
            <p>
              <a href="/vitalik.eth">vitalik.eth</a> / <a href="/nick.eth">nick.eth</a> /{' '}
              <a href="/taylor.wtf">taylor.wtf</a> / <a href="pcc.eth">pcc.eth</a> /{' '}
              <a href="/curatorcat.eth">curatorcat.eth</a> / <a href="/curatorcat.pcc.eth">curatorcat.pcc.eth</a> /{' '}
              <a href="/1.offchainexample.eth">1.offchainexample.eth</a>
            </p>

            <h5 className="mt-2 font-semibold">ETH Hex Address</h5>
            <p>
              <a href="/0xCCA7CCADbf0fBbF9ae20Bcc67f849efa87343eeE">0xCCA7CCADbf0fBbF9ae20Bcc67f849efa87343eeE</a> /{' '}
              <a href="/0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5 ">0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5</a>
            </p>
            <h5 className="mt-2 font-semibold">ETH ICAP Address</h5>
            <p>
              <a href="/XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36">XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36</a>
            </p>
            <h5 className="mt-2 font-semibold">wrong address</h5>
            <p>
              <a href="/0xCCA7CCADbf0fBbF9ae20Bcc67f849efa87343ee1">0xCCA7CCADbf0fBbF9ae20Bcc67f849efa87343ee1</a>
            </p>
          </article>
        </main>
        <footer className="flex flex-col justify-center p-6 text-sm text-white/50">
          <p>
            this website is created by{' '}
            <a href="/curatorcat.pcc.eth" className="underline">
              curatorcat.pcc.eth
            </a>{' '}
            for fun
          </p>
          <p>this website does not track your information</p>
          <p>
            <a href="#" className="underline">
              about this website
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
