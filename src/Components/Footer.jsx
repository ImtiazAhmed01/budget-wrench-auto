import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav><Link href={"/"} className="text-xl">
                    <Image
                        src={"/assets/logo.svg"}
                        width={107}
                        height={87}
                        alt="brand logo"
                        className='bg-white'
                    />
                </Link>
                    <h1 className='text-3xl font-bold'>Car Doctor</h1>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;