import React from 'react';
import './feedback.css';

const FeedbackOptions = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => {
  return (
    <ul className="feedback__list">
      <li className="feedback__list--item">
        <button type="button" onClick={onGoodFeedback}>
          Good
        </button>
      </li>
      <li className="feedback__list--item">
        <button type="button" onClick={onNeutralFeedback}>
          Neutral
        </button>
      </li>
      <li className="feedback__list--item">
        <button type="button" onClick={onBadFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export { FeedbackOptions };
