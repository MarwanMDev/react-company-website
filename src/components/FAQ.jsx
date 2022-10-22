import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnserShowing] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => setIsAnserShowing((prev) => !prev)}
    >
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
