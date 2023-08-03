import React from 'react'
import house1 from '../assets/house1.jpg'
import olayinka from '../assets/olayinka.jpg'
import tope from '../assets/tope.JPG'
import mary from '../assets/mary.jpg'
import akinloye from '../assets/akinloye.jpg'
import joshua from '../assets/joshua.jpg'

function Team({image, name, role, about, href}) {
    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center p-3" >
                <div><img src={image} alt="Photos of Onile Core Team" className='card-img-top border' style={{borderRadius: "50%", width: "300px", height: "300px"}} /></div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <ul className='list-group list-group-flush'>
                        <li className="list-group-item">{role}</li>
                        <li className="list-group-item">{about}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <a href="#" className="card-link" target='_blank'>LinkedIn</a>
                    <a href="#" className="card-link" target='_blank'>Twitter</a>
                </div>
            </div>
        </div>
    )
}



const AboutUs = () => {
  return (
    <section>
        <div className="container rounded-5 mt-3 mb-3 pt-3 border">
            <div className='text-center'><button className='btn btn-primary btn-lg text-center p-2 m-5 fw-bold fs-1'>Meet Our Core Team at ONILE</button></div>

            <div className="container mb-3">
                <div className="row g-3">
                    <Team image={house1} name="Akpevwe Praise" role="Software Developer" about="(Team Mentor)" />
                    <Team image={olayinka} name="Ilesanmi Olayinka" role="Product Manager" about="A serial and digital entrepreneur, the CEO of Eazydov Global Concept (a multimedia company based in Ibadan), an associate product manager and lead of Onile project team." />
                    <Team image={joshua} name="Joshua Akintade" role="Product Manager" about="A Social media manager and WordPress developer and one of the product managers on the Onile project." />
                    <Team image={mary} name="Mary Bamisile" role="Front-End Developer" about="A trained bio-chemist and also one of the front-end developers on the Onile project." />
                    <Team image={tope} name="Tope Taiwo" role="Front-End Developer" about="A tech lover, cybersecurity enthusiast and one of the front-end developer on the Onile projec." />
                    <Team image={akinloye} name="Akinloye Adegboye" role="Product Designer" about="A freelance Graphic designer, UI/UX Designer and product designer on the ONILE project." />
                    <Team image={house1} name="Tomiwa" role="Backend Developer" about="Backend Developer" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;
