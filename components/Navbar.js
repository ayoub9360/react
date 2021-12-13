import react, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from "next/link";

export default function Navbar() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.navcontainer}>
      <Link href="/">
        <a>
          <h3>NFT Marketplace</h3>
        </a>
      </Link>
      <Link href="/">
        <a>
          Menu
        </a>
      </Link>
      <div>
        {
          user ? ( 
            <button>
              Logout
            </button> 
          ) : (
            <button>
              Login
            </button>
          )
        }
      </div>
    </div>
  );
}
