/* eslint-disable @next/next/no-img-element */

import style from './Carousel.module.css';

const Carousel = function() {
    return (
        <div className={style.carousel}>
            <div className={style.group}>
                <div><img src='../../images/carousel_flutter.png' alt='Logo Flutter'></img></div>
                <div><img src='../../images/carousel_next.png' alt='Logo Next'></img></div>
                <div><img src='../../images/carousel_react.png' alt='Logo React'></img></div>
                <div><img src='../../images/carousel_php.png' alt='Logo PHP'></img></div>
                <div><img src='../../images/carousel_mysql.png' alt='Logo Mysql'></img></div>
                <div><img src='../../images/carousel_python.png' alt='Logo Python'></img></div>
                <div><img src='../../images/carousel_n8n.png' alt='Logo n8n'></img></div>
            </div>
            <div aria-hidden className={style.group}>
                <div><img src='../../images/carousel_flutter.png' alt='Logo Flutter'></img></div>
                <div><img src='../../images/carousel_next.png' alt='Logo Next'></img></div>
                <div><img src='../../images/carousel_react.png' alt='Logo React'></img></div>
                <div><img src='../../images/carousel_php.png' alt='Logo PHP'></img></div>
                <div><img src='../../images/carousel_mysql.png' alt='Logo Mysql'></img></div>
                <div><img src='../../images/carousel_python.png' alt='Logo Python'></img></div>
                <div><img src='../../images/carousel_n8n.png' alt='Logo n8n'></img></div>
            </div>
        </div>
    );
}

export default Carousel;