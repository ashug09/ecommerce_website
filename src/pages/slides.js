import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

export default function Slides() {
  const pic1 =
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e456a8103211209.5f47dea744a23.jpg";
  const pic2 =
    "https://couponswala.com/blog/wp-content/uploads/2022/08/jockey-end-of-season-sale.jpg";
  const pic3 =
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1672723106016/levis-coupons.jpg";
  const pic4 =
    "https://couponswala.com/blog/wp-content/uploads/2022/08/allen-solly-clearance-sale.jpg";
  return (
    <Carousel className="lg:w-3/4 mx-auto">
    <div>
        <img src={pic1} />
    </div>
    <div>
        <img src={pic2} />
    </div>
    <div>
        <img src={pic3} />
    </div>
    <div>
        <img src={pic4} />
    </div>
</Carousel>
  );
}
