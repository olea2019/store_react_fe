import styles from "./notFoundBlock.module.scss"

export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>

            <h1 className={styles.root}>
                Not Found :(
            </h1>
            <p> Unfortunately, this page is not available in our online store</p>
        </div>

    )
}