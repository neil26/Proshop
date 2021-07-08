import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	Form,
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";
const ProductScreen = ({ history, match }) => {
	const [qty, setQty] = useState(0);
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};

	return (
		<div>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<div className="card">
							<div className="row">
								<div className="col-md-12">
									<Image
										className="d-block w-100"
										src={product.image}
										alt={product.name}
										fluid
									/>
								</div>
							</div>
						</div>
					</Col>
					<Col md={3}>
						<ListGroup variant="flush">
							<br />
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} Review`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>Price : ${product.price}</ListGroup.Item>
							<br />
							<ListGroup.Item>
								Description : {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<br />
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Row>
										<Col>Price :</Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Row>
										<Col>Status :</Col>
										<Col>
											{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
										</Col>
									</Row>
								</ListGroup.Item>
								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as="select"
													value={qty}
													onChange={(e) => setQty(e.target.value)}
												>
													{[...Array(product.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}
								<ListGroup.Item
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Button
										className="btn-block"
										type="button"
										onClick={addToCartHandler}
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: "100%",
											backgroundColor: "black",
											color: "white",
											border: "none",
										}}
									>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default ProductScreen;
