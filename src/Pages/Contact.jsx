import React from 'react'
import Booktoursection from '../Components/Book-Tour-section'
import GoogleMap from '../Components/Google-map'
import datajson from '../json_data/Data.json'

const Contact = () => {
  return (
    <>
      <GoogleMap />
      <div className='location-section'>
        <div className='location-addres'>
          <h2>{datajson.states}</h2>
          <p className='addres'>{datajson.address}</p>
          <div className='contact-folder'>
            <p className='Contact'>{datajson.phone_text}
              <a href={`tel:${datajson.phone_number}`}>
                <p className='Contact-number'>+91 {datajson.phone_number} </p>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Booktoursection />
    </>
  )
}

export default Contact