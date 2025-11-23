/* eslint-disable @next/next/no-img-element */

import style from './Carousel.module.css';

const Carousel = function() {
    return (
        <div className={style.carousel}>
            <div className={style.group}>
                <div><img src='/images/carousel_flutter.png' alt='Logo Flutter' /></div>
                <div><img src='/images/carousel_next.png' alt='Logo Next' /></div>
                <div><img src='/images/carousel_react.png' alt='Logo React' /></div>
                <div><img src='/images/carousel_php.png' alt='Logo PHP' /></div>
                <div><img src='/images/carousel_mysql.png' alt='Logo Mysql' /></div>
                <div><img src='/images/carousel_python.png' alt='Logo Python' /></div>
                <div><img src='/images/carousel_n8n.png' alt='Logo n8n' /></div>
                <div><img src='/images/carousel_git.png' alt='Logo Git Hub' /></div>

                <div><img src='/images/carousel_googleads.png' alt='Logo Google Ads' /></div>
                <div><img src='/images/carousel_metaads.png' alt='Logo Meta Ads' /></div>
            </div>
            <div aria-hidden className={style.group}>
                <div><img src='/images/carousel_flutter.png' alt='Logo Flutter' /></div>
                <div><img src='/images/carousel_next.png' alt='Logo Next' /></div>
                <div><img src='/images/carousel_react.png' alt='Logo React' /></div>
                <div><img src='/images/carousel_php.png' alt='Logo PHP' /></div>
                <div><img src='/images/carousel_mysql.png' alt='Logo Mysql' /></div>
                <div><img src='/images/carousel_python.png' alt='Logo Python' /></div>
                <div><img src='/images/carousel_n8n.png' alt='Logo n8n' /></div>
                <div><img src='/images/carousel_git.png' alt='Logo Git Hub' /></div>
                <div><img src='/images/carousel_googleads.png' alt='Logo Google Ads' /></div>
                <div><img src='/images/carousel_metaads.png' alt='Logo Meta Ads' /></div>
            </div>
        </div>
    );
}

export default Carousel;