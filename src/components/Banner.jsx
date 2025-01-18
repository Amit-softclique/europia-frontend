import React from 'react';
// Then import Owl Carousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        // Use jQuery from the global scope
        window.$(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 3000,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          },
        });
      }, []);

  return (
    <>
        <h1>This is banner</h1>
        <div className="owl-carousel">
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 1" />
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 2" />
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 3" />
        </div>

        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 4" />
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 5" />
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 6" />
        </div>

        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 7" />
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 8" />
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ272v0fHPfJaGEbiaR1gyLJ9Zl07RnjuAGJO6b2MjI0Cx27nQ0VhhIaw8&s" alt="Item 9" />
        </div>
        </div>
    </>
  )
}

export default Banner;