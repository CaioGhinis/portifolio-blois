import Link from 'next/link';
import Image from 'next/image';
import { StyledHeader } from './StyledNavbar';

export default function MyNavbar() {
    return (
        <StyledHeader>
            <div className='navbar'>
                <div className='logo'>
                    <Image src="/images/LOGO.png" alt="Logo" width={250} height={125} />
                </div>
                <ul className='links'>
                    <li>
                        <Link legacyBehavior href='/'><a>ABOUT ME</a></Link>
                    </li>
                    <li>
                        <Link legacyBehavior href='/'><a>CASES</a></Link>
                    </li>
                    <li>
                        <Link legacyBehavior href='/'><a>PORTIFOLIO</a></Link>
                    </li>
                    <li>
                        <Link legacyBehavior href='/'><a>CONTACT</a></Link>
                    </li>
                </ul>
                <div className='toggle_btn'>
                    <i className='fa-solid fa-bars'></i>
                </div>
            </div>
            {/*<div className='linha'></div>
            <div className='linha2'></div>
            
            
            .linha {
                background-color: white;
                width: 20%;
                height: 2px;
            }
            .linha2 {
                background-color: white;
                width: 65%;
                height: 2px;
                float: right;
                
            }
            */}

        </StyledHeader>
    )
}