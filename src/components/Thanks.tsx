import styles from "./Thanks.module.css";

type Props = { rating: number }

export function Thanks({rating}: Props) {
    return <div className={styles.panel}>
        <img src="/illustration-thank-you.svg"></img>
        <p className={styles.selected}>You selected {rating} out of 5</p>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!</p>

    </div>

}
