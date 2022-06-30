export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return <div>
        <button type="button" var="good" onClick={onLeaveFeedback}>good</button>
        <button type="button" var="neutral" onClick={onLeaveFeedback}>neutral</button>
        <button type="button" var="bad" onClick={onLeaveFeedback}>bad</button>
    </div>
}