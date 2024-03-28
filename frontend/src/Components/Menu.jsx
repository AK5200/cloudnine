import React from 'react'
import {data} from '../restApi.json'
import {Link} from 'react-scroll'
export const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">HOTTEST RESTAURANTS</h1>
                <p>Dine in to your favourite restaurants and get exclusive offers curated just for you!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                       
                        <div className="card" key={element.id}>
                                <Link 
                                to='reservation' spy={true}
                                smooth={true}
                                duration={500}
                                key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                                </Link>
                        </div>
                      
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu