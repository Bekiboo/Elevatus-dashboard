'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky z-50 inset-x-0 flex justify-between bg-gray-800 text-white p-4">
      <div>
        <Link href="/" className={pathname === '/' ? 'underline' : ''}>
          Home
        </Link>
        <span> | </span>
        <Link
          href="/donors"
          className={pathname.startsWith('/donors') ? 'underline' : ''}
        >
          Donors
        </Link>
        <span> | </span>
        <Link
          href="/children"
          className={pathname.startsWith('/children') ? 'underline' : ''}
        >
          Children
        </Link>
        <span> | </span>
        <Link
          href="/employees"
          className={pathname.startsWith('/employees') ? 'underline' : ''}
        >
          Employees
        </Link>
      </div>
    </nav>
  )
}
