
import { useEffect, useState } from 'react';
import './App.css';
import * as axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function App() {
   const [images,setImages]=useState([]);
   useEffect(()=>{
    axios.get('https://api.unsplash.com/photos/?client_id=1TlMOtcrPaBcAJohInypknwuPMjue5fyvZ2jJmgIE-Q')
    .then(response=>setImages( response.data))
    .catch(error=> console.log(error));

  },[]);

   if(!images){
    return <h1>Loading</h1>
   }
  return (
    <div className="App">
      {images.map((image)=>{
        return <LazyLoadImage
        effect='blur'
         src={image.urls.regular} 
         alt={image.alt_description} 
         key={image.id}
         height='600px'
         width='600px'/>

      })}
    </div>
  );
}


