import React from 'react'
import olutomiwa from '../assets/olutomiwa.jpg'
import olayinka from '../assets/olayinka.jpg'
import tope from '../assets/tope.png'
import mary from '../assets/mary.jpg'
import akinloye from '../assets/akinloye.jpg'
import joshua from '../assets/joshua.jpg'
import akpevwe from '../assets/akpevwe.jpg'

function Team({image, name, role, about, linkedin, twitter}) {
    return (

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center p-3" >
                <div><img src={image} alt="Photos of Onile Core Team" className='card-img-top img-responsive border' style={{borderRadius: "50%", width: "250px", height: "250px"}} /></div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <ul className='list-group list-group-flush'>
                        <li className="list-group-item">{role}</li>
                        <li className="list-group-item">{about}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <a href={linkedin} className="card-link" target='_blank'>LinkedIn</a>
                    <a href={twitter} className="card-link" target='_blank'>Twitter</a>
                </div>
            </div>
        </div>
    )
}

const AboutUs = () => {
  return (
    <section>
        <div className="container rounded-5 mt-3 mb-3 pt-3 border">
            <div className='text-center'><button className='btn btn-primary btn-lg text-center p-2 m-5 fw-bold fs-1'>Meet Our Team at ONILE</button></div>

            <div className="container mb-3">
                <div className="row g-3">
                    <Team image={akpevwe} name="Akpevwe Essi" role="Full-Stack Software Engineer" about="A self-taught full-stack software engineer and technical writer with a passion for creating scalable and maintainable mobile and web applications. Also the team mentor on the Onile project" linkedin="https://www.linkedin.com/in/akpevwe-essi-45416518b/" twitter="#" />
                    <Team image={olayinka} name="Ilesanmi Olayinka" role="Product Manager" about="A serial and digital entrepreneur, the CEO of Eazydov Global Concept (a multimedia company based in Ibadan), an associate product manager and lead of Onile project team." linkedin="https://www.linkedin.com/in/ilesanmi-olayinka-56495aa9/" twitter="#" />
                    <Team image={joshua} name="Joshua Akintade" role="Product Manager" about="A Social media manager and WordPress developer and one of the product managers on the Onile project." linkedin="https://www.linkedin.com/in/joshua-akintade-6106961b0/" twitter="#" />
                    <Team image={mary} name="Mary Bamisile" role="Front-End Developer" about="A trained bio-chemist and also one of the front-end developers on the Onile project." linkedin="https://www.linkedin.com/in/mary-bamisile-a30a2a26a/" twitter="#" />
                    <Team image={tope} name="Tope Taiwo" role="Front-End Developer" about="A tech lover, cybersecurity enthusiast and one of the front-end developer on the Onile project." linkedin="https://www.linkedin.com/in/taiwotopesunday/" twitter="https://twitter.com/taiwotopesunday/" />
                    <Team image={akinloye} name="Akinloye Adegboye" role="Product Designer" about="A freelance Graphic designer, UI/UX Designer and product designer on the ONILE project." linkedin="https://www.linkedin.com/in/adegboye-akinloye-741291256/" twitter="https://twitter.com/hay_keyz" />
                    <Team image={olutomiwa} name="Olutomiwa Olatunji" role="Backend Developer" about="An Engineering student in FUOYE, currently acquiring skills in Cybersecurity and Web3 and backend developer on the Onile project." linkedin="https://www.linkedin.com/in/olutomiwa-olatunji-421a03205/" twitter="#" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;
