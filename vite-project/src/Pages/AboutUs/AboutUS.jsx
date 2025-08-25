import "./AboutUS.css"
import SaTodaySquareUp from '../../components/SaTodaySquareUp/SaTodaySquareUp';
import SaAboutSquareUp from '../../Components/SaAboutSquareUp/SaAboutSquareUp'
import SaWorkone from "../../components/SaWorkone/SaWorkone" 
const AboutUS = () => {
  return (
    <>
        <SaWorkone
        bgImage= "/assets/images/head-bg-new.png"
        title="About Us"
        subtitle= "Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        />
        <SaAboutSquareUp
        title= "About SquareUp"
        subtitle= "SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
        bgImage= "/assets/images/head-bg-5.png"
        icone="/assets/images/Logo-colorfull.svg"
        line1="/assets/images/line-left.svg"
        line2= "/assets/images/line-right.svg"
        line3="/assets/images/line-up.svg"
        line4="/assets/images/Line-down.svg"
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
