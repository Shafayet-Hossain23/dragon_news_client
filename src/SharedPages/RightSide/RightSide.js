import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithubSquare, FaGoogle, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaLock, FaCaretSquareDown } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../Assets/Images/Brand1.png'
import Brand2 from '../../Assets/Images/Brand2.png'



const RightSide = () => {
    return (
        <div style={{
            position: "sticky",
            top: "80px"
        }} className='ms-4'>
            <div className="d-grid gap-2">
                <Button variant="outline-info" size="">
                    <FaGoogle /><span className='ps-2'>Login via Google</span>
                </Button>
                <Button variant="outline-info" size="">
                    <FaGithubSquare /><span className='ps-1'> Login via Github</span>
                </Button>
            </div>
            <div>
                <p className='mt-4 ps-2 mb-0 pb-0'>Find on us</p>
            </div>
            <div>
                <div className="d-grid gap-2">
                    <Button variant="outline-info" size="">
                        <FaFacebook /><span className='ps-2'>Facebook</span>
                    </Button>
                    <Button variant="outline-info" size="">
                        <FaYoutube /><span className='ps-1'> Youtube</span>
                    </Button>
                    <Button variant="outline-info" size="">
                        <FaTwitter /><span className='ps-1'> Twitter</span>
                    </Button>
                    <Button variant="outline-info" size="">
                        <FaWhatsapp /><span className='ps-1'> What's App</span>
                    </Button>
                    <Button variant="outline-info" size="">
                        <FaLock /><span className='ps-1'> Privacy Policy</span>
                    </Button>
                    <Button variant="outline-info" size="">
                        <FaCaretSquareDown /><span className='ps-1'> Terms and Condition</span>
                    </Button>
                </div>
            </div>
            <div>
                <p className='mt-4 ps-2 mb-0 pb-0'>Editorials</p>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: "175px" }}
                            className="d-block w-100"
                            src={Brand1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: "175px" }}
                            className="d-block w-100"
                            src={Brand2}
                            alt="Second slide"
                        />

                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default RightSide;