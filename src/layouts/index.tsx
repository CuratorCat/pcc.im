import { Footer } from 'components/Footer'
import { Header, HeaderBrand } from 'components/Header'
import { ToastContainer } from 'react-toastify'

const toastClass = {
  success: 'bg-violet-900/50 backdrop-blur-xl shadow-lg shadow-violet-400/10',
  error: 'bg-red-600',
  info: 'bg-gray-600',
  warning: 'bg-orange-400',
  default: 'bg-indigo-600',
  dark: 'bg-white-600 font-gray-300',
}

export function LayoutHome({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen m-auto sm:max-w-lg sm:min-h-fit overflow-hidden">
        <Header />
        <main className="flex flex-1 flex-col rounded-3xl sm:rounded-[36px] min-h-[30vh] p-6 bg-violet-100/10">
          <HeaderBrand />
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export function Layout({ children }) {
  return (
    <>
      <ToastContainer
        toastClassName={({ type }) =>
          toastClass[type || 'default'] +
          ' relative text-sm font-semibold flex p-3 rounded-xl text-center mx-6 sm:mx-auto mt-6 justify-between break-words break-all overflow-hidden cursor-pointer leading-tight'
        }
      />
      <div className="flex flex-col min-h-screen m-auto sm:max-w-lg sm:min-h-fit overflow-hidden">
        <Header />
        <main className="flex flex-1 flex-col rounded-3xl sm:rounded-[36px] min-h-[60vh] p-6 bg-violet-100/10">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export function LayoutWider({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen m-auto sm:max-w-3xl sm:min-h-fit overflow-hidden">
        <Header />
        <main className="flex flex-1 flex-col rounded-3xl sm:rounded-[36px] min-h-[60vh] p-6 bg-violet-100/10">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
