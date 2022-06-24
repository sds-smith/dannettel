import { WorkWithEdContainer } from "./work-with-ed.styles"
import LinkButton from "../link/link.component"

const WorkWithEd = () => {
    return (
        <WorkWithEdContainer>
            <h2>Work With Ed</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <LinkButton to='/contact'>Contact</LinkButton>
        </WorkWithEdContainer>
    )
}

export default WorkWithEd