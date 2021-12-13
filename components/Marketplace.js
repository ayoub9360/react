import react from "react";
import styles from "../styles/Marketplace.module.css";
import Card from "../components/Card";

export default function Marketplace() {
  return (
    <div className={styles.marketcontainer}>
      <h3>Marketplace</h3>
      <div className={styles.cardContainer}>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
        <Card title="NuxtJs" image="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" desc="NFT n°12" price="120 €"/>
      </div>
    </div>
  )
}