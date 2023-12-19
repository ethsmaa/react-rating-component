import styles from "./Rating.module.css";

type Props = {
    rating: number | null,
    onRate: (selectedPoint: number) => void
    onSubmit: () => void
}

export function Rating({rating, onRate, onSubmit}: Props) {

    return <div className={styles.panel}>
        <img className={styles.star} src="/icon-star.svg"></img>

        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is
            appreciated to help us improve our offering!</p>

        <div className={styles.grouprate}>
            {
                [1, 2, 3, 4, 5].map((r) => {
                    return <button onClick={() => onRate(r)} className={styles.rating}>
                        {r}
                    </button>
                })
            }
        </div>


        <button disabled={rating === null}
                onClick={onSubmit}
                className={styles.submit}><b>Submit</b></button>
    </div>

}