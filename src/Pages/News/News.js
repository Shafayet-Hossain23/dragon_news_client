import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye, FaShareAlt, FaRegBookmark, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = (props) => {
    const { author, details, image_url, rating, thumbnail_url, title, total_view, _id } = props.news

    return (
        <div>

            <Card className="text-center bg-light mb-3 text-dark">
                <Card.Header>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex '>
                            <div>
                                <img style={{ height: '55px', width: '55px' }} className='img-fluid rounded-circle' src={author?.img} alt="" />
                            </div>
                            <div className='ms-3 '>
                                <p className='mb-0 mt-1'>{author?.name}</p>
                                <p>{author?.published_date}</p>
                            </div>
                        </div>
                        <div style={{ width: '50px' }} className='mt-3 d-flex justify-content-between'>
                            <div>
                                <FaRegBookmark />
                            </div>
                            <div>
                                <FaShareAlt></FaShareAlt>
                            </div>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='mb-3'>{title}</Card.Title>
                    <img className='img-fluid' style={{ width: '100%', height: '470px' }} src={thumbnail_url} alt="" />
                    <Card.Text style={{ textAlign: 'justify' }} className='mt-4 mb-2 p-1 '>
                        {
                            details.length > 300 ? <div>{details.slice(0, 300)}...<Link to={`/news/${_id}`}>Read more</Link></div> : details
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <div className='pe-3 text-warning'>
                                <FaStar />
                            </div>
                            <div className='pb-1'>
                                {rating.number}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='pe-3'>
                                <FaEye />
                            </div>
                            <div>
                                {total_view}
                            </div>
                        </div>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default News;