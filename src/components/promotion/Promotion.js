import React from 'react';
import {Image} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import bedroom from '../../assets/bedroom.jpg';
const images = require.context('../../assets/promotions', true);
const imageList = images.keys().map(image => images(image));

const Promotion = (props) => {
    let carousel = imageList.map((image,i) => {
        return (
            <Carousel.Item key={i}>
                <Image
                    className="d-block w-100"
                    src={image}
                    alt="LEVIN"
                />
            </Carousel.Item>
        );
    });
    return (
        <div className="row" style={{margin: 0}}>
            <Carousel indicators={false} interval={1500}>
                {carousel}
            </Carousel>
        </div>
    );
}

export default Promotion;