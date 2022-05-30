import { toast } from 'react-toastify'

export const copyText = text => {
  copyTextToClipboard(text).catch(err => {
    console.log(err)
  })
}

export const copyTextWithToast = text => {
  const notify = () =>
    toast.success('copied: ' + text, {
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

  copyTextToClipboard(text)
    .then(() => {
      notify()
    })
    .catch(err => {
      console.log(err)
    })
}

async function copyTextToClipboard(text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}
