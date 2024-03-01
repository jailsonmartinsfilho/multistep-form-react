import{BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'

import './ReviewForm.css'
const ReviewForm = ({ data, updateFieldHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required checked={data.review === "unsatisfied"} onChange={(evento) => updateFieldHandler("review", evento.target.value)} />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required checked={data.review === "neutral"} onChange={(evento) => updateFieldHandler("review", evento.target.value)}/>
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required checked={data.review === "satisfied"} onChange={(evento) => updateFieldHandler("review", evento.target.value)}/>
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required checked={data.review === "very_satisfied"} onChange={(evento) => updateFieldHandler("review", evento.target.value)}/>
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      
      <div className="form-control">
        <label htmlFor="">Comentário</label>
        <textarea name="comment" id="comment" placeholder='Conte como foi sua experiê ncia com o produto' required value={data.comment || ""} onChange={(evento) => updateFieldHandler("comment", evento.target.value)}></textarea>
      </div>
    </div>
  )
}

export default ReviewForm