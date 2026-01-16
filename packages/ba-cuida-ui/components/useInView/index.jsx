import { useEffect, useState } from 'react'

export function useInView(ref, options) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options,
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return inView
}
