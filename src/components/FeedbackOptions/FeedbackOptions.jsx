import PropTypes from 'prop-types';
import { PrimaryButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonsList = Object.keys(options);

    return <ul>
                {buttonsList.map((item) => <li key={item}>
                <PrimaryButton type='button' value={item} onClick={onLeaveFeedback}>{item}</PrimaryButton>
                </li>)}
            </ul>
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}