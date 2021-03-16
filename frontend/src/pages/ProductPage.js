import React,{useEffect} from 'react'
// import data from '../data'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {detailsProduct} from '../actions/productActions' 



const ProductPage = (props) => {
	// const product = data.products.find(x=> x._id === props.match.params.id)
	const dispatch = useDispatch()
	const productId = props.match.params.id
	const productDetails = useSelector((state) => state.productDetails)
	const {products,loading,error} = productDetails

	useEffect(()=>{
		dispatch(detailsProduct(productId))
	},[dispatch,productId])
	// if(!product){
	// 	return <div>Product not found</div>
	// }
	// this value is same as product/:id url value
	// "/images/p1.jpg" - url for image
	// src={product.image}
	// console.log(product.image)
	// console.log(product.name)
	return (
		<div>
		{
			loading ? ( <LoadingBox></LoadingBox> ):
			error ? ( <MessageBox variant="danger">{error}</MessageBox>) :(

				<div>
				<Link to="/">Back to Product Page</Link>
			<div className="row top">
				<div className="col-2">
					<img className="large" src="/images/p1.jpg" alt={products.name} />

				</div>
				<div className="col-1">
					<ul>
						<li><h1>{products.name}</h1></li>
						<li><Rating rating={products.rating} numReviews={products.numReviews}></Rating></li>
						<li>Price: Rs. {products.price}</li>
						<li>Description: <p>{products.description}</p></li>
					</ul>
				</div>
				<div className="col-1">
					<div className="card card-body">
						<ul>
							<li>
								<div className="row">
									<div>Price</div>
									<div className="price">${products.price}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Status</div>
									<div className="price">
									{products.countInStock>0 ? (<span className="success">In Stock</span>):
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
			
        </div>

		
	)
}

export default ProductPage

