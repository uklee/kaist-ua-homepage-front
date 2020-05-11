import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import * as bannersAPI from "../../lib/api/banner";

import { CarouselItem } from "../molecules";

const sample = {
  banners: [
    {
      id: 1,
      url:
        "https://lh3.googleusercontent.com/sS7Zhh8RMnBga256QvRxET2a7u_AEkrg8qzywMkdoFaF1ecNag4CTl-ZEoAq_qJaC8LANaIqzrhEXuoo3qV4-XXbqXw34rontHGGr7KOByNuhSMHNWNbp7slV-FC0GDki781DfY1t9ZhEei-AnR7LOgbFLkRqMuibKOr4UqpsczVjyFG182a2xszs6jrfx22HYlZGwoxR4Fy7K2qK4vhMHNseKzsg0peNNgkWHzuHYVcTJYKE9JLegH04TA7G7jQH015h2rMP2V3iiveVxmdHdrb7P5qjWaiXWkxpczeIwmjrf_B2AghWYnWwXv5bOuBfuGIt4wBpkQAsKKFub0Ww-6xAUBqAD2ztf4prZZFYZ_Ea0pKJW3AiOzUbPRow0gxJweodAC6rG6RoW9QPjyhiXog2d-2iCyiLHSO_duApjviRRTPekvn6VEG8kojwj6g_7xQe8LgjPkuFDwT7TauzDUZ25qUm197NDcbhbvj1EZrWudhJJazYjI1ZXcJUERldxApHmP6qngH7GtfQuT4-XZ0fV0URYACHtHNLWkOEdLfIFoqdIebzd9Sd6_utyZ22FaTW4yfA4OZWjh4T8wulEGLduVnwXboK68qONEhFtXkCBpFvpvM7UCYykBwRA8z8JvvkWi7eAES0Y3VJTOHvk7ZNZwt1N_ZRmWuxuKihBU7jYVLbtXbmp0vVfkaJQfu797we45eDi3QLwLoyenG_Vyrh8CCueebd3cdbeyIbhQhzBHNow=w3584-h1454-no"
    },
    {
      id: 2,
      url:
        "https://lh3.googleusercontent.com/sS7Zhh8RMnBga256QvRxET2a7u_AEkrg8qzywMkdoFaF1ecNag4CTl-ZEoAq_qJaC8LANaIqzrhEXuoo3qV4-XXbqXw34rontHGGr7KOByNuhSMHNWNbp7slV-FC0GDki781DfY1t9ZhEei-AnR7LOgbFLkRqMuibKOr4UqpsczVjyFG182a2xszs6jrfx22HYlZGwoxR4Fy7K2qK4vhMHNseKzsg0peNNgkWHzuHYVcTJYKE9JLegH04TA7G7jQH015h2rMP2V3iiveVxmdHdrb7P5qjWaiXWkxpczeIwmjrf_B2AghWYnWwXv5bOuBfuGIt4wBpkQAsKKFub0Ww-6xAUBqAD2ztf4prZZFYZ_Ea0pKJW3AiOzUbPRow0gxJweodAC6rG6RoW9QPjyhiXog2d-2iCyiLHSO_duApjviRRTPekvn6VEG8kojwj6g_7xQe8LgjPkuFDwT7TauzDUZ25qUm197NDcbhbvj1EZrWudhJJazYjI1ZXcJUERldxApHmP6qngH7GtfQuT4-XZ0fV0URYACHtHNLWkOEdLfIFoqdIebzd9Sd6_utyZ22FaTW4yfA4OZWjh4T8wulEGLduVnwXboK68qONEhFtXkCBpFvpvM7UCYykBwRA8z8JvvkWi7eAES0Y3VJTOHvk7ZNZwt1N_ZRmWuxuKihBU7jYVLbtXbmp0vVfkaJQfu797we45eDi3QLwLoyenG_Vyrh8CCueebd3cdbeyIbhQhzBHNow=w3584-h1454-no"
    }
  ]
};

const HomeCarousel = props => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    bannersAPI.list().then(res => {
      setBanners(res.data);
    });
  }, []);

  const CarouselItemList = banners.map(banner => (
    <CarouselItem key={banner.id} src={banner.url} />
  ));

  return (
    <Carousel className={props.className} indicators={false}>
      {CarouselItemList}
    </Carousel>
  );
};

export default HomeCarousel;
