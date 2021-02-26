import InternalSwiper from './swiper';
import Item from './item';

type InternalSwiperType = typeof InternalSwiper;
interface SwiperInterface extends InternalSwiperType {
  Item: typeof Item;
}

const Swiper = InternalSwiper as SwiperInterface;

Swiper.Item = Item;

export default Swiper;
