import React from 'react';
import bedroom from '../../assets/bedroom.jpg';

const Promotion = (props) => {
    return (
        <div className="container">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={bedroom}
              alt="tv-cabinet"
            />
        </div>
    );
}

export default Promotion;