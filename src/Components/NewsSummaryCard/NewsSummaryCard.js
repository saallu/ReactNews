import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import {FaEye, FaStar} from "react-icons/fa";


const NewsSummaryCard = ({news}) => {

    const {_id,author,title,rating,details,image_url,total_view} = news;

    return (
        <div >
        <Card className="mb-5">
            <Card.Header className="d-flex justify-content-between align-items-center">

                <div className="d-flex">
            <Image
                roundedCircle
                className="me-2 "
                src={author.img}
                style={{height:'60px'}}>

            </Image>

                    <div>
                        <p className="mb-0">{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>

                    <p>Share</p>

                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 200 ?
                        <p> {details.slice(0,250)} <Link to={`/news/${_id}`}>Read More</Link> </p> :
                    <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">

                <div>
                    <FaStar className="text-warning me-3"></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className="me-3"></FaEye>
                    <span>{total_view}</span>
                </div>

            </Card.Footer>
        </Card>
        </div>
    );
};

export default NewsSummaryCard;