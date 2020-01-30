import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => (
    <header className={styles.container}>
        <div className={styles.row}>
            <Link to="/">FDNA</Link>
        </div>

        <div className={styles.row}>
            <Link to="/">Clusters distance </Link>|
            <Link to="/about"> Cluster data</Link>
        </div>
    </header>

)