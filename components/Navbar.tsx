import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';

import Logo from '../assets/logo.png';
import SearchIcon from '../assets/search-icon.svg';
import UserIcon from '../assets/user-icon.svg';

type Props = {
    isLoggedIn: boolean;
    isSearch?: boolean;
}

const Navbar: FC<Props> = ({ isLoggedIn, isSearch = false }) => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.rightContainer}>
                <div className={styles.logoWrapper}>
                    <Link href="/home" passHref={true}>
                        <Image src={Logo} alt="logo" height={30} width={30} className={styles.imgLogo} />
                    </Link> 
                </div>
                {isLoggedIn &&
                    <>
                        <span>All</span>
                        <span>TV Shows</span>
                        <span>Movies</span>
                        <span>New Releases</span>
                        <span>Purchased</span>
                    </>
                }
            </div>
            {!isSearch && 
                <div className={styles.leftContainer}>
                    {isLoggedIn ?
                        <>
                            <Link href="/home/search" passHref={true}>
                                <Image src={SearchIcon} alt="Search icon" height={30} width={30} />
                            </Link>
                            <div className={styles.userWrapper} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Image src={UserIcon} alt="User icon" height={25} width={25} />
                            </div>
                        </> :
                        <div className={styles.loginBtn}>
                            <Link href={'/login'} passHref={true}>
                                <span className={styles.loginBtn}>Login</span>
                            </Link>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Navbar;
