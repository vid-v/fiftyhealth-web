import * as React from 'react';
import { Nav } from 'react-bootstrap';

const NavBarComponent = ({ }) => {
    const navOptons = [
        "Health Conditions",
        "Mental Health",
        "Fitness",
        "Nutrition",
        "Health Care",
        "Wellness"
    ]
    return (
        <div>
            {
                navOptons.map((option, index) => {
                    <span key={index}>{option}</span>
                })
            }
        </div>
    );
}

export default NavBarComponent;
