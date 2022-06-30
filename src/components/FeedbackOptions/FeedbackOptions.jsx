import { FeedbackOptionsList, FeedbackOptionsListItem, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return <FeedbackOptionsList>
        {/* <FeedbackOptionsListItem>
            <FeedbackButton type="button" var="good" onClick={() => {console.log(props)}}>Good</FeedbackButton>
        </FeedbackOptionsListItem>
        <FeedbackOptionsListItem>
            <FeedbackButton type="button" var="neutral" onClick={props.handleClick}>Neutral</FeedbackButton>
        </FeedbackOptionsListItem>
        <FeedbackOptionsListItem>
            <FeedbackButton type="button" var="bad" onClick={props.onLeaveFeedback}>Bad</FeedbackButton>
        </FeedbackOptionsListItem> */}
        <button type="button" var="good" onClick={onLeaveFeedback}>good</button>
        <button type="button" var="neutral" onClick={onLeaveFeedback}>neutral</button>
        <button type="button" var="bad" onClick={onLeaveFeedback}>bad</button>
    </FeedbackOptionsList>
}