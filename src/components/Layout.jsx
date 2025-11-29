import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                        <span style={{ color: 'var(--color-secondary)' }}>Culinary</span>Science
                    </Link>
                    <nav className="nav">
                        <Link to="/" className="nav-link">Courses</Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 Culinary Science Course. Elevate your cooking.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
