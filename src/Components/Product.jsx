import React, { Component } from 'react'
import { apiCall } from '../ApiCalls/baseUrl'
import {get} from 'lodash'
const endPoint = '/products/'

class Product extends Component {

constructor(props){
    super(props)
    this.state={
        product:{}
    }

}
componentDidMount(){
    
    // productDetail Api call
    this.productDetail()
}

//productDetails api call
productDetail= async ()=>{
    const {match} = this.props
    
    // fetching params 
let id = get(match, 'params.id',false)

    apiCall(endPoint+id,
        (data)=>{
            this.setState({
                product : data
            })  
        },
        (error)=>console.log(error)
        )
}

//goback function
handleGoBack = ()=>{
    
    const {history} = this.props
    return history.goBack()
}

// render
    render() {
        const {product} = this.state

        return product && (
                    <div className='container p-5' >
                        <button type="button" className="btn btn-outline-secondary navbar-brand float-left fixed-top mt-5 ml-2" onClick={this.handleGoBack}>Back</button>
                        <div className='row mr-3'>
                                
                            <div className='col-lg-4 border'>
                                <h5 className='card-title' >Description </h5> {product.description}</div>
                                <div className='col-lg-8'>
                                    <p className='p-2 float-left col-6 col-md-8 border '>Name : {product.name}</p>
                                    <p className='p-2 float-left col-6 col-md-8 border '> Model : {product.model}</p>
                                    <p className='p-2 float-left col-6 col-md-8 border '> Price : {product.price}</p>
                               </div>
                        </div>
                    </div>
                    )
            
    }
            
}

export default Product
