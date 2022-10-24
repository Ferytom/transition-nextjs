import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='text-2xl font-medium z-20 relative'>
      <ul className='flex gap-12'>
        <Link href='/'>
          <li className='cursor-pointer'>Home</li>
        </Link>
        <Link href='/contact'>
          <li className='cursor-pointer'>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}
