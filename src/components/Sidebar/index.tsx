import React, { useCallback, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import {
  MagnifyingGlass,
  List,
  SquaresFour,
  PawPrint,
  User,
  SignOut,
  GearSix,
  IdentificationBadge
} from 'phosphor-react'

interface ISidebarElement {
  icon: any
  label?: string
}

const sidebarElements: ISidebarElement[] = [
  {
    icon: List
  },
  {
    icon: MagnifyingGlass,
    label: 'Buscar'
  },
  {
    icon: SquaresFour,
    label: 'Dashboard'
  },
  {
    icon: PawPrint,
    label: 'Pets'
  },
  {
    icon: User,
    label: 'Clientes'
  },
  {
    icon: IdentificationBadge,
    label: 'Vets'
  },
  {
    icon: GearSix,
    label: 'Ajustes'
  }
]

const SidebarVariants: Variants = {
  hide: {
    width: [300, 90]
  },
  show: {
    width: [90, 300]
  }
}

export function Sidebar() {
  const [isOpen, setOpen] = useState(false)
  const [firstClick, setFirstClick] = useState(false)
  const handleClickSidebar = useCallback(() => {
    setFirstClick(true)
    setOpen(!isOpen)
  }, [isOpen])
  return (
    <motion.div
      className="flex relative flex-col gap-5 p-5 w-[90px] h-screen bg-sidebar-green"
      animate={firstClick ? (isOpen ? 'show' : 'hide') : {}}
      variants={SidebarVariants}
    >
      <>
        {sidebarElements.map((element: ISidebarElement, idx: number) => (
          <div
            key={idx}
            onClick={handleClickSidebar}
            className={`flex 
            p-2 w-auto hover:bg-sidebar-light-grey hover:rounded-xl transition-[all] duration-200 cursor-pointer items-center`}
          >
            <element.icon
              weight="bold"
              className="mx-auto w-7 h-7 text-sidebar-grey"
            />
            {/* {isOpen && (
              <motion.span
                className="ml-3 font-bold text-sidebar-grey"
                animate={{
                  opacity: [0, 1],
                  x: [50, 0],
                  transition: { duration: 1, ease: 'easeInOut' }
                }}
              >
                {element.label}
              </motion.span>
            )} */}
          </div>
        ))}
        <motion.div className="flex absolute bottom-0 left-0 justify-center items-center p-2 mt-auto w-full bg-sidebar-light-grey rotate-180 cursor-pointer">
          <SignOut weight="bold" className="w-7 h-7 text-sidebar-grey" />
        </motion.div>
      </>
    </motion.div>
  )
}
