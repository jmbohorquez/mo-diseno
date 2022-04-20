import Link from 'next/link'

import Logo from '../public/images/logo-min.svg'

const Header = () => {

    return(
        <header className="header">
            <figure className="header-logo">
                <Logo />
            </figure>
            <nav className="header-main-nav">
                <ul className="menu">
                    <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lo-que-somos">
                            <a>Nosotros</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header