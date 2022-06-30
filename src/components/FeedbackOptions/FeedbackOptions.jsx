import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return <div>
        <button type="button" value="good" onClick={onLeaveFeedback}>Good</button>
        <button type="button" value="neutral" onClick={onLeaveFeedback}>Neutral</button>
        <button type="button" value="bad" onClick={onLeaveFeedback}>Bad</button>
    </div>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}