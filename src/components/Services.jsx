import React from 'react'

const Services = () => {
  const gallery = [
    { img: "./img3.jpg", heading: "Strength Training", paragraph: "Build muscle and increase your power with our state-of-the-art equipment" },
    { img: "/cardio.jpg", heading: "Cardio Zone", paragraph: "Boost your endurance with our premium cardiovascular machines" },
    { img: "/personal.jpg", heading: "Personal Training", paragraph: "Get expert guidance from certified fitness professionals" },
    { img: "/img4.jpg", heading: "Group Classes", paragraph: "Join energetic group sessions for motivation and fun" },
    { img: "/yoga.jpg", heading: "Yoga Studio", paragraph: "Find your inner peace with our relaxing yoga sessions" },
    { img: "/img8.jpg", heading: "HIIT Workouts", paragraph: "Burn calories fast with high-intensity interval training" },
    { img: "/swim.jpg", heading: "Swimming Pool", paragraph: "Enjoy low-impact workouts in our pristine swimming facilities" },
    { img: "/diet.jpg", heading: "Nutrition Plans", paragraph: "Customized meal plans to complement your fitness journey" },
  ]

  const galleryItems = [
    { images: gallery.slice(0, 2) },
    { images: gallery.slice(2, 4) },
    { images: gallery.slice(4, 6) },
    { images: gallery.slice(6, 8) },
  ]

  return (
    <section className="gallery">
      <h1>OUR SERVICES</h1>
      <div className="images">
        {galleryItems.map((item, index) => (
          <div key={index} className="image-container">
            {item.images.map((element, idx) => (
              <div key={idx} className="image-wrapper">
                <img src={element.img} alt="galleryImage" />
                <div className="text-overlay">
                  <h3>{element.heading}</h3>
                  <p>{element.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
export default Services
