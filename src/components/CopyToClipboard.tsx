import { toast } from 'react-toastify'

export function CopyToClipboard({ copyText, children }) {
  const notify = () =>
    toast.success('copied: ' + copyText, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      icon: false,
    })

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        notify()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <span onClick={handleCopyClick} className="cursor-pointer">
      {children}
    </span>
  )
}
