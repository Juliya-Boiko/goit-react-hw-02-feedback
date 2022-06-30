// import PropTypes from 'prop-types';
import { PrimaryButton } from './PrButton.styled';

export const FeedbackOptions = (props) => {
    const { options, onLeaveFeedback } = props;
    const buttonsList = Object.keys(options);
    return <ul>
        {buttonsList.map((item) => <li key={item}>
            <PrimaryButton type='button' value={item} onClick={onLeaveFeedback}>{item}</PrimaryButton>
        </li>)}
    </ul>
    // console.dir(buttonsList);
    // console.dir(onLeaveFeedback);

    // return <div>
    //     <button type="button" value="good" onClick={onLeaveFeedback}>Good</button>
    //     <button type="button" value="neutral" onClick={onLeaveFeedback}>Neutral</button>
    //     <button type="button" value="bad" onClick={onLeaveFeedback}>Bad</button>
    // </div>
}

// FeedbackOptions.propTypes = {
//     onLeaveFeedback: PropTypes.func.isRequired
// }