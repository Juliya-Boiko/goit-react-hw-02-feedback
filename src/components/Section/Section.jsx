import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';
import { GiCoffeeBeans } from 'react-icons/gi';

export const Section = ({ title, children }) => {
    return <SectionContainer>
                <GiCoffeeBeans size="50px"/>
                <SectionTitle>{title}</SectionTitle>
                {children}
            </SectionContainer>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}