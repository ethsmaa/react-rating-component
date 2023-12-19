import './App.css'
import {Rating} from "./components/Rating.tsx";
import {Thanks} from "./components/Thanks.tsx";
import {useState} from "react";

function App() {
    const [rating, setRating] = useState<number | null>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)


    return <>
        {(!isSubmitted || rating === null) ? <Rating rating={rating}
                                                     onRate={setRating}
                                                     onSubmit={() => {
                                                         setIsSubmitted(true)
                                                     }}
        /> : <Thanks rating={rating}/>}

    </>
}


export default App;