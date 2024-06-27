"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { navLinks } from '../../../constants'
import { Button } from '../ui/button'


const MobileNav = () => {
    const pathname = usePathname()
    return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image src="/assets/images/download.svg" alt="logo" height={28} width={180} />
            </Link>

            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/sign-in' showName />
                    <Sheet>
                        <SheetTrigger>
                            <Image src="/assets/icons/menu.svg" alt="menu" height={32} width={32} className="cursor-pointer " />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                                <Image src="/assets/images/download.svg" alt="logo" height={23} width={152} className='shadow-md p-3' />
                                <ul className='header-nav_elements'>
                                    {
                                        navLinks.map((link) => {
                                            const isActive = link.route === pathname
                                            return (<li key={link.route} className={`${isActive ? 'gradient-text' : ''} flex-center whitespace-nowrap text-dark-700 w-full`}>
                                                <Link href={link.route} className='sidebar-link flex-center cursor-pointer montserrat-normal w-full'>
                                                    {link.label}
                                                </Link>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav
