import Image from 'next/image';
import style from './Carousel.module.css';

const Carousel = function() {
    return (
        <div className={style.carousel}>
            <div className={style.group}>
                <div><Image src='/images/carousel_flutter.png' alt='Logo Flutter' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_next.png' alt='Logo Next' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_react.png' alt='Logo React' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_php.png' alt='Logo PHP' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_mysql.png' alt='Logo Mysql' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_python.png' alt='Logo Python' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_n8n.png' alt='Logo n8n' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_git.png' alt='Logo Git Hub' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
            </div>
            <div aria-hidden className={style.group}>
                <div><Image src='/images/carousel_flutter.png' alt='Logo Flutter' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_next.png' alt='Logo Next' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_react.png' alt='Logo React' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_php.png' alt='Logo PHP' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_mysql.png' alt='Logo Mysql' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_python.png' alt='Logo Python' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_n8n.png' alt='Logo n8n' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
                <div><Image src='/images/carousel_git.png' alt='Logo Git Hub' width={200} height={50} style={{ objectFit: 'cover' }} priority /></div>
            </div>
        </div>
    );
}

export default Carousel;