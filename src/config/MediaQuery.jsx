import { useEffect, useState } from 'react'

const MediaQuery = (query) => {
    const [matches, setMathes] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        setMathes(mediaQuery.matches)

        const handler = (e) => {
            setMathes(e.matches)
        }

        mediaQuery.addEventListener("change", handler)

        return() => {
            mediaQuery.removeEventListener("change", handler)
        }
    },[query])


  return matches
}

export default MediaQuery