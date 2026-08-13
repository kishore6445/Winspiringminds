import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "../../common/Button/Button";

import "./Navbar.css";

const navLinks = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Challenges",
        href: "#challenges",
    },
    {
        label: "Framework",
        href: "#framework",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Insights",
        href: "#insights",
    },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen
            ? "hidden"
            : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                className={`navbar ${
                    isScrolled
                        ? "navbar--scrolled"
                        : ""
                }`}
            >
                <div className="navbar__container">

                    {/* Logo */}

                    <a
                        href="#home"
                        className="navbar__logo"
                        onClick={closeMenu}
                    >
                        <span className="navbar__logo-title">
                        Winspiringminds
                        </span>

                        {/* <span className="navbar__logo-subtitle">
                            People • Leadership • Growth
                        </span> */}
                    </a>


                    {/* Desktop Navigation */}

                    <nav className="navbar__nav">
                        <ul className="navbar__list">

                            {navLinks.map((link) => (
                                <li
                                    key={link.label}
                                    className="navbar__item"
                                >
                                    <a
                                        href={link.href}
                                        className="navbar__link"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </nav>


                    {/* Desktop CTA */}

                    <div className="navbar__actions">

                        <Button
                            variant={
                                isScrolled
                                    ? "dark"
                                    : "primary"
                            }
                            href="#contact"
                            className="navbar__cta"
                        >
                            Let's Talk
                        </Button>

                    </div>


                    {/* Mobile Toggle */}

                    <button
                        type="button"
                        className="navbar__mobile-toggle"
                        onClick={() =>
                            setIsMenuOpen(true)
                        }
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <Menu size={24} />
                    </button>

                </div>
            </header>


            {/* Mobile Menu */}

            <div
                className={`mobile-menu ${
                    isMenuOpen
                        ? "mobile-menu--open"
                        : ""
                }`}
                aria-hidden={!isMenuOpen}
            >

                <div
                    className="mobile-menu__overlay"
                    onClick={closeMenu}
                />

                <aside className="mobile-menu__drawer">

                    <div className="mobile-menu__header">

                        <a
                            href="#home"
                            className="mobile-menu__logo"
                            onClick={closeMenu}
                        >
                            Sudhir Koka
                        </a>

                        <button
                            type="button"
                            className="mobile-menu__close"
                            onClick={closeMenu}
                            aria-label="Close navigation menu"
                        >
                            <X size={24} />
                        </button>

                    </div>


                    <nav className="mobile-menu__nav">

                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="mobile-menu__link"
                                onClick={closeMenu}
                            >
                                <span>
                                    {link.label}
                                </span>

                                <span className="mobile-menu__arrow">
                                    →
                                </span>
                            </a>
                        ))}

                    </nav>


                    <div className="mobile-menu__footer">

                        <Button
                            variant="dark"
                            href="#contact"
                            className="mobile-menu__cta"
                            onClick={closeMenu}
                        >
                            Let's Talk
                        </Button>

                    </div>

                </aside>

            </div>
        </>
    );
}

export default Navbar;