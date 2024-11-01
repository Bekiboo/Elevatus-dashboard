'use client'

import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky z-50 inset-x-0 flex justify-between bg-gray-800 text-white p-4">
      <div>
        <a href="/" className={pathname === '/' ? 'underline' : ''}>
          Home
        </a>
        <span> | </span>
        <a
          href="/donors"
          className={pathname.startsWith('/donors') ? 'underline' : ''}
        >
          Donors
        </a>
        <span> | </span>
        <a
          href="/children"
          className={pathname.startsWith('/children') ? 'underline' : ''}
        >
          Children
        </a>
        <span> | </span>
        <a
          href="/employees"
          className={pathname.startsWith('/employees') ? 'underline' : ''}
        >
          Employees
        </a>
      </div>
    </nav>
  )
}
