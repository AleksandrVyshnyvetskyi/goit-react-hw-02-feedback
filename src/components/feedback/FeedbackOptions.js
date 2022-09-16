import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  onGoodFeedback: PropTypes.func.isRequired,
  onNeutralFeedback: PropTypes.func.isRequired,
  onBadFeedback: PropTypes.func.isRequired,
};
