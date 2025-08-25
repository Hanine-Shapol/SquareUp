import SaWorkone from "../../components/SaWorkone/SaWorkone" 
import SaTodaySquareUp from '../../components/SaTodaySquareUp/SaTodaySquareUp'


const ContactUS = () => {
  return (
     <>
        <SaWorkone
        bgImage= "/assets/images/head-bg-4.png"
        title="Contact Us"
        subtitle= "Get in touch with us today and let us help you with any questions or inquiries you may have."
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

export default ContactUS