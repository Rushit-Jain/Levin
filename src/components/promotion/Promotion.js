import React from 'react';
import {useHistory} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const images = require.context('../../assets/promotions', true);
const imageList = images.keys().map(image => images(image));

const Promotion = (props) => {
    let history = useHistory();
    let carousel = imageList.map((image,i) => {
        let index = +((image.split("/")[3]).split('\.')[0])-1;
        return (
            <Carousel.Item key={i}>
                <Image
                    className="d-block w-100"
                    src={image}
                    alt="LEVIN"
                    onClick={() => {
                        if(index>24)
                            history.push('/products/doric');
                        else if(index%2 === 0)
                            history.push('/products/doric');
                        else
                            history.push('/products/dolby');
                        }
                    }
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