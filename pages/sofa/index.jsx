import styles from "./cart.module.scss";
import { GrFavorite } from 'react-icons/gr';
import { TbRectangle } from 'react-icons/Tb';
import Image from 'next/image';
import Link from "next/link";

export const getStaticProps = async () => {
    try {
        const res = await fetch("http://localhost:5000/items");
        const data = await res.json();

        return {
            props: { element: data }
        }
    } catch (error) {
        alert('Не удалось получить данные')
    }

}

const Sofa = ({ element }) => {
    return (
        <>
            <h1 className={styles.cart__head}>Диваны</h1>
            <div className={styles.cart__inner}>
                {element.map((item) => {
                    return (
                        <article className={styles.cart} key={item.id}>
                            {/* <img className={styles.cart__picture} src={item.images[0].path} /> */}
                            <Image className={styles.cart__picture} src={item.images[0].path} width={500} height={300} alt="sofa"/>
                            <button className={styles.cart__button} type="button">
                                <GrFavorite size={30} />
                            </button>

                            <ul className={styles.cart__list}>
                                <li className={styles.cart__item}>
                                    <h2 className="cart__heading">Диван Клик-Кляк</h2>
                                </li>

                                <li className={styles.cart__box}>
                                    <p className={styles.cart__price}>{item.price} ₽</p>
                                    <p className={styles.cart__marketing}> 34 990₽</p>
                                    <span className={styles.cart__icon}><TbRectangle size={50} />-10%</span>
                                </li>
                            </ul>
                            <Link href={`/sofa/${item.id}`} key={item.id} className={styles.cart__link}>Посмотреть</Link>
                        </article>
                    )
                })}
            </div>
        </>
    )

}

export default Sofa;