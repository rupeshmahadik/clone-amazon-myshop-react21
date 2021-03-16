import React from 'react'
import data from '../data'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'

const ProductPage = (props) => {
	const product = data.products.find(x=> x._id === props.match.params.id)
	if(!product){
		return <div>Product not found</div>
	}
	// this value is same as product/:id url value
	// "/images/p1.jpg" - url for image
	// src={product.image}
	console.log(product.image)
	return (

		<div>
		<Link to="/">Back to Product Page</Link>
			<div className="row top">
				<div className="col-2">
					<img className="large" src="/images/p1.jpg" alt={product.name} />

				</div>
				<div className="col-1">
					<ul>
						<li><h1>{product.name}</h1></li>
						<li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
						<li>Price: Rs. {product.price}</li>
						<li>Description: <p>{product.description}</p></li>
					</ul>
				</div>
				<div className="col-1">
					<div className="card card-body">
						<ul>
							<li>
								<div className="row">
									<div>Price</div>
									<div className="price">${product.price}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Status</div>
									<div className="price">
									{product.countInStock>0 ? (<span className="success">In Stock</span>):
										(<span className="error">Out of Stock</span>)}
									</div>
								</div>
							</li>
							<li>
								<button className="primary block">Add to Cart</button>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	)
}

export default ProductPage