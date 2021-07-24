import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkButton({ content, routeLink }) {
    return (
        <Link style={{ textDecoration: "none", color: "#0095F6", fontSize: "14px" }} to={routeLink}>{content}</Link>
    );
}