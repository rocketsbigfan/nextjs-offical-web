'use client'
import React, { createContext, ReactElement, ReactNode, useContext, useMemo, useState } from "react"

const ModalContext = createContext<{ open: boolean, setOpen: (open: boolean) => void }>({
  open: false,
  setOpen: () => {}
})

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  const value = useMemo(() => ({ open, setOpen }), [open, setOpen])

  return <ModalContext.Provider 
    value={value}
  >
    {children}
  </ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)
export const OpenModalButton = ({ children }: { children: ReactElement<{ onClick?: () => void }> }) => {
  const { setOpen, open } = useModalContext()
  
  return React.cloneElement(children, { onClick: () => setOpen(!open) })
}
export default ModalProvider
