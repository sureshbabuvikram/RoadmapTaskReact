import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let [cart,setCart]=useState(0)
  let datas=[ {
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '$40.00 - $80.00',
    sale: false,
    originalPrice: "",
    original: false,
    reviews: false,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: ' $18.00',
    sale: true,
    originalPrice: '$20.00',
    original: true,
    reviews: true,
  },
  {
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '$25.00',
    sale: true,
    originalPrice: '',
    original: false,
    reviews: false,

  },
  {
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '$40.00',
    sale:false,
    originalPrice: "",
    original: false,
    reviews: true,
  },
  {
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: ' $25.00',
    sale: true,
    originalPrice: '$50.00',
    original: true,
    reviews: false,
  },
  {
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: ' $120.00',
    sale: false,
    originalPrice: '$280.00',
    original: true,
    reviews: false,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: ' $18.00',
    sale: true,
    originalPrice: '$20.00',
    original: true,
    reviews: true,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: ' $20.00',
    sale: false,
    originalPrice: '',
    original: false,
    reviews: true,
  }]
  
  return <>
<TopBar cart={cart} setCart={setCart} />
<Header/>
<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    datas.map((product,i)=>{
                      return <Card product={product} key={i} cart={cart} setCart={setCart}/>
                    
                    })
                   }

                    </div>
              </div>
</section>
<Footer />              
  </>
}

export default App