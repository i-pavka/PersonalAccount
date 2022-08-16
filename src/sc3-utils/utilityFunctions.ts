export const uid = () => {
  return `id-${(~~(Math.random()*1e8)).toString(16)}`
}

export const scrollTop = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, 500)
}

export const delay = (ms: number) =>
  new Promise(res => setTimeout(res, ms));