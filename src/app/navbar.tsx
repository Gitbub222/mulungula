'use client'

import { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;
    const isProjectsActive = pathname === "/Projects" || pathname === "/Contact";

    const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${isProjectsActive ? "bg-white border-b border-gray" : "bg-black border-b border-regal-blue"}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image className="rounded" width={40} height={40} src="/images/icon.jpeg" alt="Baraka Mulungula" unoptimized />
                        </div>
                        <div className="hidden sm:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink href="/" isActive={isActive("/")}>Home</NavLink>
                                <NavLink href="/Projects" isActive={isActive("/Projects")}>Projects</NavLink>
                                <NavLink href="/Bookshelf" isActive={isActive("/Bookshelf")}>Bookshelf</NavLink>
                                <NavLink href="/Contact" isActive={isActive("/Contact")}>Contact</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <MobileNavLink href="/" isActive={isActive("/")}>Home</MobileNavLink>
                    <MobileNavLink href="/Projects" isActive={isActive("/Projects")}>Projects</MobileNavLink>
                    <MobileNavLink href="/Bookshelf" isActive={isActive("/Bookshelf")}>Bookshelf</MobileNavLink>
                    <MobileNavLink href="/Contact" isActive={isActive("/Contact")}>Contact</MobileNavLink>
                </div>
            </div>
        </nav>
    );
};

// Individual link components for desktop and mobile
type NavLinkProps = {
    href: string;
    isActive: boolean;
    children: ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, isActive, children }) => (
    <Link href={href} className={`rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'}`}>
        {children}
    </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ href, isActive, children }) => (
    <Link href={href} className={`block rounded-md px-3 py-2 text-base font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'}`}>
        {children}
    </Link>
);

export default Nav;
