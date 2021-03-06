import react from "react";
import Image from 'next/image'
import styles from 'styles/Product.module.css'
import { useRouter } from 'next/router'

export default function Product(props, { posts }) {
  const query = useRouter().query

  return (
    <div className={styles.productContainer}>
      <p>{query.title}</p>
      { query.image && <Image className={styles.image} width="100%" height="100%" src={query.image} alt="description"/>}
      <p>{query.desc}</p>
      <p>{query.price}</p>
    </div>
  )
}