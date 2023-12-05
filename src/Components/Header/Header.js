import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'container'}>
            <div className={'header'}>
                <Link to={'/'}>
                    <div className="header-logotype">
                        <a href="/"><span className="logotype-text ">MOVIE  <span>TV</span></span></a>
                    </div>
                </Link>
                <nav>
                    <button> <Link  to={'/'}>Главное</Link></button>
                    <button>  <Link  to={'/search'}>Найти фильм</Link></button>
                </nav>
            </div>
        </header>
    )
}
export default Header