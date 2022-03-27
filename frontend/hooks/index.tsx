import { useCallback, useEffect, useState } from 'react'
// Credits to usehooks website
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
export const useToggle = (initialState = false):[boolean,()=>void] => {
  // Initialize the state
  const [state, setState] = useState(initialState);
  
  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState(state => !state), []);
  
  return [state, toggle]
}