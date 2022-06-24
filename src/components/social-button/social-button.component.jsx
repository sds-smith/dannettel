import { Social } from "./social-button.styles"

const SocialButton = ({imageSrc, pathName}) => {

    return (
        <Social href={pathName}>
            <img src={imageSrc} alt={'alt'} />
        </Social>
    )
}

export default SocialButton