import React from 'react';
import './Committees.css';
import CommitteesCarousel from '../components/CommitteesCarousel/CommitteesCarousel.js';

function Committees() {
    return (
        <body>
            <h1>Bioengineering Honor Society's Committees</h1>
            <CommitteesCarousel committeefolder="Academic" committee = "Academic" bios = "blahahahaha" />
        </body>
    );
}

export default Committees;
