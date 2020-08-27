import React, { PureComponent } from 'react'
import Categories from './Categories'
//apiCalls
import { apiCall } from '../ApiCalls/baseUrl'

const endPoint = '/categories'

class Home extends PureComponent {


    constructor(props){
        super(props)
        this.state= {
            categories: [],
            catId: 0
        }
    }

    componentDidMount(){
        
       // api Calling
       this.categoryApi()

    }

    // categories Api calling
    categoryApi = async ()=>{
        
        apiCall(
                endPoint,
                (data)=>{
                    this.setState({
                        categories:data
                    })
                },
                    (error)=>{console.log(error)}
                )

    }

// Handler
    handleChange(event){
        // const {catId} = this.state
        this.setState({
            catId:event.target.value
        })
    }


// render
    render() {
        const {categories,catId } =this.state

        return (
            <div className='container' >

               <div className='header p-3'>
               <span className='p-2'>Product Category</span>
                   
                <select  onChange={this.handleChange.bind(this)} >
                    {categories && categories.map((category, index)=>{
                        return <option key={index} value={category.id} >{category.name}</option>
                    }) }
                        
                </select>
               </div>
               <div className='body'>
                   <Categories catId={catId} />
               </div>
               
            </div>
        )
    }
}

export default (Home)
