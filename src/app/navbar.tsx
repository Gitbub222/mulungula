'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"; // Import usePathname hook


const Nav: React.FC = () => {  // Use FC type
    const pathname = usePathname(); // Get the current pathname

    const isActive = (href: string) => pathname === href; // Helper to check if a link is active
    const isProjectsActive = pathname === "/Projects" || pathname === "/Contact" ; // Helper to check if a link is active
    return (
        <nav className={`fixed top-0 z-50 w-full bg-black ${isProjectsActive? "bg-white border-b border-gray": "bg-black border-b border-regal-blue"}`}> {/* Fixed Positioning */}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-9 w-9 rounded" src="/images/icon.jpeg" alt="Baraka Mulungula" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <Link
                                    href="/"
                                    className={`rounded-md px-3 py-2 text-sm font-medium 
                                    ${isActive("/") ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'}`}
                                    aria-current={isActive("/") ? "page" : undefined} // aria-current for accessibility
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/Projects"
                                    className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/Projects") ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'}`}
                                    aria-current={isActive("/Projects") ? "page" : undefined}
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/Bookshelf"
                                    className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/Bookshelf") ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'}`}
                                    aria-current={isActive("/Bookshelf") ? "page" : undefined}
                                >
                                    Bookshelf
                                </Link>
                                <Link
                                    href="/Contact"
                                    className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/Contact") ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'}`}
                                    aria-current={isActive("/Contact") ? "page" : undefined}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">

                    <Link href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
                    <Link href="/Projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Projects</Link>
                    <Link href="/Bookshelf" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Bookshelf</Link>
                    <Link href="/Contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav