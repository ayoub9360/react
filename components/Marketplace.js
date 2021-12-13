import react from "react";
import styles from "../styles/Marketplace.module.css";
import Card from "../components/Card";

export default function Marketplace() {
  return (
    <div className={styles.marketcontainer}>
      <h3>Marketplace</h3>
      <div className={styles.cardContainer}>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="Sacha le bras" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="Ahmed " image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="Sasha n°2" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="Shinshan" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
      </div>
    </div>
  )
}