import "./AboutUS.css"
import SaTodaySquareUp from '../../components/SaTodaySquareUp/SaTodaySquareUp';
import SaWorkone from "../../components/SaWorkone/SaWorkone" 
const AboutUS = () => {
  return (
    <>
        <SaWorkone
        bgImage= "/assets/images/head-bg-new.png"
        title="About Us"
        subtitle= "Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        />
        <SaTodaySquareUp
        icon= "/assets/images/Logo.svg"
        title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
        subtitle= "Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
        subtitleCta="Welcome to SquareUp"
        highlightCta="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
        linkTo= "/contact"
        buttonText="Start Project"
        />
        </>
  )
}

export default AboutUS
