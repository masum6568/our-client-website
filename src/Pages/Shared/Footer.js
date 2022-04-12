import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <header>

            </header>

            <main>

            </main>

            <footer className="footer">
                <img src="" alt="" />
                {/* <div className="footer__addr">
                    <h1 className="footer__logo">Something</h1>

                    <h2>Contact</h2>


                    <p>5534 Somewhere In. The World 22193-10212</p>


                    <a className="footer__btn" href="supercar@gmail.com">Email Us</a>


                </div> */}

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Buy</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Online</a>
                            </li>

                            <li>
                                <a href="#">Print</a>
                            </li>

                            <li>
                                <a href="#">Alternative Ads</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                       

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="#">Hardware Design</a>
                            </li>

                            <li>
                                <a href="#">Software Design</a>
                            </li>

                            <li>
                                <a href="#">Digital Signage</a>
                            </li>

                            <li>
                                <a href="#">Automation</a>
                            </li>

                            <li>
                                <a href="#">Artificial Intelligence</a>
                            </li>

                            <li>
                                <a href="#">IoT</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#">Terms of Use</a>
                            </li>

                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p className='foot'>&copy; 2019 Something. All rights reserved.♥</p>

                    {/* <div className="legal__links">
                        <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
                    </div> */}
                </div>
            </footer>
        </>
    );
};

export default Footer;