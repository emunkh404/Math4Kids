import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsPuzzleFill } from 'react-icons/bs'; // Import a fun icon, like a puzzle piece
import './Testimonial.css'; // Make sure to create this CSS file for styling

export default function Testimonial() {
    return (
        <Card body className="testimonial-card">
            <BsPuzzleFill className="math-icon" /> {/* Add an icon for visual appeal */}
            <p className="math-quote">
                "Pure mathematics is, in its way, the poetry of logical ideas." - Albert Einstein
            </p>
        </Card>
    );
}
