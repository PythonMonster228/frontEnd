import MyCard from './MyCard';
import { useEffect } from 'react';
import { Col, Row} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../store/ProductSlice';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './img/ExampleCarouselImage.imG';

function Catalog(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);
    
    const products = useSelector((state) => state.products.products);
    console.log("Состояние хранилища Redux:", products);

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };

    return(
        <div className="d-flex, p-3">
            {products.length === 0 ? (
            <p>Loading...</p>
            ) : (
            <Row md={40} className="g-4">
                {products.map((product, id) => (
                    <Col key={id}>
                        <MyCard {...product} />
                    </Col>
                ))}
            </Row>
            )}
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Third slide" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default Catalog;