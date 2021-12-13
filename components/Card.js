import react from "react";
import Image from 'next/image'
import styles from "../styles/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <p>test {props.title}</p>
      <Image width="100%" height="100%" src={props.image} alt="description"/>
      <p>{props.desc}</p>
      <p>{props.price}</p>
      <button className={styles.button}>Buy now</button>
    </div>
  )
}