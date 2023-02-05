import Image from 'next/image';
import styles from "./cart.module.scss";

export const getStaticPaths = async () => {

    try {
        const res = await fetch("http://localhost:5000/items");
        const data = await res.json();

        const paths = data.map((element => {
            return {
                params: { id: element.id.toString() }
            }
        }))
        return {
            paths,
            fallback: false

        }

    } catch (error) {
        console.warn(error);
    }

}

export const getStaticProps = async (context) => {
    try {
        const id = context.params.id;
        const res = await fetch(`http://localhost:5000/items/${id}`);
        const data = await res.json();
        return {
            props: { element: data }
        }

    } catch (error) {
        console.warn(error)
    }

}

const Details = ({ element }) => {
    return (
        <figure className={styles.product__card}>
            <Image className={styles.cart__picture} src={element.images[0].path} width={700} height={400} alt="sofa"/>
            <figcaption className={styles.cart__price}>{element.price} ₽</figcaption>

        </figure>
    )
}

export default Details