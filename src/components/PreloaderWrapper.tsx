"use client"

import { useState, useCallback } from "react"
import Preloader from "@/components/ui/preloader"

export default function PreloaderWrapper() {
  const [showPreloader, setShowPreloader] = useState(true)

  const handleComplete = useCallback(() => {
    setShowPreloader(false)
  }, [])

  if (!showPreloader) return null

  return <Preloader onComplete={handleComplete} />
}
