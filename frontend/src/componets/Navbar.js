import React from 'react';

const Navbar = () => {
    return (
        <nav 
            className='navbar navbar-expand-lg navbar-dark bg-dark' 
        >
            <div className='container-fluid'>  
                <div className='navbar-brand'>Mekashron</div>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNavAltMarkup' 
                    aria-controls='navbarNavAltMarkup' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                    style={{ cursor: 'pointer'}}
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-center' 
                    id='navbarNavAltMarkup'
                >
                    <ul className='navbar-nav' style={{ cursor: 'pointer'}}>
                        <li className='nav-link' href='#'>Menu 1 | </li>
                        <li className='nav-link' href='#'>Menu 2 | </li>
                        <li className='nav-link' href='#'>Menu 3</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;