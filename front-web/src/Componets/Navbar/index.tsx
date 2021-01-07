import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Navbar() {
    
    return(
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    );
}