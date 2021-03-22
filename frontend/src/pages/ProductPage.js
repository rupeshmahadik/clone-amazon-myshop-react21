import React,{useState,useEffect} from 'react'
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
	const [qty, setQty] = useState(1)

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

	function addToCartHandler(){
		props.history.push(`/cart/${productId}?qty=${qty}`)
	}
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
							{
								products.countInStock > 0 && (
									<>
									<li>
										<div className="row">
											<div>Qty</div>
											<div>
												<select value={qty} onChange={(e) => setQty(e.target.value)} >
												{
													[...Array(products.countInStock).keys()].map(
														(x) => (
															<option key={x+1} value={x + 1}> {x + 1}</option>
															)
														)
												}
												</select>
											</div>
										</div>
									</li>			
									<li>
										<button onClick={addToCartHandler} className="primary block">Add to Cart</button>
									</li>
									</>

									)
							}
							
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

