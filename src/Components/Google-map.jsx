import React from 'react'
// import GoogleMapReact from 'google-map-react';


const GoogleMap = () => {

    return (
        <>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Divine hub coworking space Andheri Mumbai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                    <a href="https://pdflist.com/" alt="pdf">Pdf</a>
                </div>
                </div>
        </>
    )
}

export default GoogleMap