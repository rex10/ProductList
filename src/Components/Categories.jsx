import React, { PureComponent } from 'react'
//api
import { apiCall } from '../ApiCalls/baseUrl'
//router
import { Link } from 'react-router-dom'

const endPoint = '/products'

class Categories extends PureComponent {

constructor(props){
        super(props)
            this.state = {
                products : [],
                id : 0
            }

        }
       

    componentDidMount(){
        // api Calling

        this.productApi()
        this.setState({isLoading:false})
        
    }
// apiCalling function
    productApi = async ()=>{

            apiCall(
                endPoint,
                (data)=>{
                    this.setState({
                        products:data

                    })
                    
                    
                },
                    (error)=>{console.log(error)}
                )
                
        
    }

// render
    render(){
        const {catId } = this.props
        const {  products } = this.state
    

        return (  <div className='container' >
                    <div className='row p-3'>
            
                        { products && products.filter(prods => catId == prods.categoryId)
                                    .map((category,index)=>{

                                this.setState({
                                    id: category.id
                                })
                                    return (
                                        <div className='col-sm-4 ' key={category.id} >
                                               
                                            <Link  to={'/products/'+ category.id} >
                                               <div className='card-body border'>
                                                    <div className=''>
                                                        <h5 className='card-title border' >Description </h5> 
                                                           {category.description}
                                                    </div><br/>
                                                   <div className='card-text'> 
                                                        <p className='border' > Name : {category.name}</p>
                                                
                                                        <p className='border' >Medel : {category.model}</p>
                                                
                                                        <p className='border' >Price : {category.price}</p>
                                                    </div>
                                                </div>
                                                
                                            </Link>
                                        </div>    
                                    )                               
                                })
                }
            </div>
        </div>
                          
        )
    }
}

export default Categories
