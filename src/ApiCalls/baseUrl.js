import axios from 'axios'

const config = {
    baseURL: 'https://aveosoft-react-assignment.herokuapp.com'
};

export const apiCall = (endPoint, onSuccess, onFailure, signal ) => {

   axios({
        method: 'get',
        url: config.baseURL + endPoint,
        signal: signal
    })
      .then((response)=>{
        //   onSuccess
          if(response.status === 200){
            //   try catch Block
              try {
                  onSuccess(response.data)
              }catch(error) { 
                  onFailure("Somethings went wrong")
              }
          }
        //   session Error handling 
          else if(response.status === 401){
              onFailure("Session expired")
              
      }
    })
      .catch((error)=>{
          console.log('error', error)
      })

}