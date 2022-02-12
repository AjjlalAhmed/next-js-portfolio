/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Brian Erdelyi",
      comment:
        "Very hardworking and motivated programmer. He was patient with ll my suggestions and feedback. I would hire again.",
    },
    {
      id: 2,
      name: "zmusad",
      comment:
        "Amazing individual, replies instantly and did everything I requested.",
    },
    {
      id: 3,
      name: "cam_erji12",
      comment:
        "This dude is absolutely awesome, he had to do so much in a short time and did it awesome!!! If you consider to order something from him do not hesitate! Would order again!!!!",
    },
    {
      id: 4,
      name: "nulllq",
      comment:
        "A very good experience working with ajjlal_ahmed! Definitely recommend and will be coming back in the future for more projects.",
    },
  ];

  return (
    <div className="testimonial">
      <h1 className="title">testimonial</h1>
      <Splide>
        {testimonialData.map((item, index) => (
          <SplideSlide key={index}>
            <div className="testi-card">
              <div className="img">
                <img src="/avatar.svg" alt="avater" />
              </div>
              <p className="comment">{item.comment}</p>
              <p className="name">{item.name}</p>
              <div className="icons">
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonial;
