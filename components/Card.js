import react from "react";
import Image from 'next/image'
import styles from "../styles/Card.module.css";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <p>{props.title}</p>
      <Image width="100%" height="100%" src={props.image} alt="description" className={styles.image}/>
      <p>{props.desc}</p>
      <p>{props.price}</p>
      <Link href={`/product?title=${props.title}&desc=${props.desc}&price=${props.price}&image=${props.image}`}>
        <a>
          <button className={styles.button}>Buy now</button>
        </a>
      </Link>
    </div>
  )
}