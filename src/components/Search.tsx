import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useRouter } from 'next/router'

export function Search() {
  const [account, setAccount] = useState('')
  const router = useRouter()
  const handleSubmit = event => {
    event.preventDefault()
    router.push('/' + account)
  }

  return (
    <form onSubmit={handleSubmit} action="." className='mb-6 -mx-6 sm:mx-0'>
      <div className="flex w-full bg-black/25 sm:rounded-2xl px-3 sm:px-1 py-2 sm:py-1 focus-within:bg-white text-violet-400/50 focus-within:text-violet-500 transition-all duration-150">
        <div className="flex items-center pl-2 pointer-events-none" onClick={handleSubmit}>
          <SearchIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <input
          id="ens"
          className="flex w-full h-full px-1 py-3 
          bg-transparent
          text-lg sm:text-xl font-medium placeholder-violet-400/50
          border-transparent text-violet-500 focus:outline-none focus:placeholder-violet-300 focus:ring-0 focus:border-transparent
          animate-pulse focus:animate-none"
          placeholder="Type ENS or ETH Address"
          type="url"
          inputMode='url'
          name="ens"
          spellCheck="false"
          autoCapitalize='false'
          autoCorrect="false"
          autoComplete="off"
          value={account}
          onChange={e => setAccount(e.target.value)}
        />
        <button
          className="flex my-1 px-4 mr-1 bg-violet-500 hover:bg-violet-700 focus:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-1 text-white font-semibold rounded-xl items-center justify-center sm:w-auto"
          onClick={handleSubmit}
        >
          Go
        </button>
      </div>
    </form>
  )
}