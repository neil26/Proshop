import React from "react";
import Rating from "./Rating.js";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<section className="wrapper">
			<Card className="my-3 rounded">
				<Link to={`/product/${product._id}`}>
					<Card.Img className="img-card" src={product.image} variant="top" />
				</Link>
				<Card.Body className="card-content">
					<Link to={`/product/${product._id}`}>
						<Card.Title className="card-title">
							<strong>{product.name}</strong>
						</Card.Title>
					</Link>
					<Card.Text>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</Card.Text>
					<Card.Text as="h3">${product.price}</Card.Text>
				</Card.Body>
			</Card>
		</section>
	);
};

export default Product;
