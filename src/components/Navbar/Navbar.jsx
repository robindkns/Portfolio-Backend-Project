import './Navbar.sass';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='#home'>Home</Link>
                </li>
                <li>
                    <Link to='#about'>About</Link>
                </li>
                <li>
                    <Link to='#skills'>Skills</Link>
                </li>
                <li>
                    <Link to='#works'>Works</Link>
                </li>
                <li>
                    <Link to='#contact'>Contact</Link>
                </li>
            </ul>
            <button>DOWNLOAD CV</button>
        </nav>
    );
}