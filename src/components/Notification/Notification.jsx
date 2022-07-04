import PropTypes from 'prop-types';
import { NotificationMessage, NotificationText } from './Notification.styled';
import { MdOutlineSpeakerNotesOff } from "react-icons/md";

export const Notification = ({ message }) => {
    return <NotificationMessage>
                <NotificationText>{message}</NotificationText>
                <MdOutlineSpeakerNotesOff />
            </NotificationMessage>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}