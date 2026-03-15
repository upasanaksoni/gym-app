import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "This gym has completely transformed my fitness journey. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained muscle mass I never thought possible!"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Professional Athlete",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "The facilities are top-notch and the community here is amazing. I've trained at gyms all over the world, and this one stands out for its commitment to results and member satisfaction."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Business Executive",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    message: "As someone with a busy schedule, the flexible class timings have been a game-changer. The personal training sessions are worth every penny. Highly recommend to anyone serious about fitness."
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Yoga Instructor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message: "The variety of classes offered here is incredible. From high-intensity workouts to relaxing yoga sessions, they have it all. The instructors really care about helping you reach your goals."
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Retired Military",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    message: "After retiring from the military, I needed a place to maintain my fitness routine. This gym feels like a second home. The camaraderie among members is outstanding."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  }, [isAnimating]);

  // Reset animation state after transition completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials">
      <h1>What Our Clients Say</h1>
      <p className="subtitle">Real stories from real people who transformed their lives</p>
      
      <div className="testimonials-container">
        <button className="nav-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>
        
        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-message">"{testimonial.message}"</p>
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                  <div className="testimonial-rating">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="testimonials-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
