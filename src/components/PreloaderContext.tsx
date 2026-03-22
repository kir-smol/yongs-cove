"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import Preloader from "@/components/ui/preloader"

const PreloaderContext = createContext(false)

export function usePreloaderDone() {
  return useContext(PreloaderContext)
}

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false)

  const handleComplete = useCallback(() => {
    setDone(true)
  }, [])

  return (
    <PreloaderContext.Provider value={done}>
      {!done && <Preloader onComplete={handleComplete} />}
      {children}
    </PreloaderContext.Provider>
  )
}
