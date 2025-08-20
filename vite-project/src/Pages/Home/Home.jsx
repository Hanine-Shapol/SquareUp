import SATrustedLogos from "../../components/SATrustedLogos/SATrustedLogos"
import ThankyouSec from "../../components/ThankyouSec/ThankyouSec"
const Home = () => {
  return (
    <>
        <SATrustedLogos
        subTitle="Trusted By 250+ Companies"
        icon1Trusted="/assets/images/company-1.svg"
        icon2Trusted="/assets/images/company-2.svg" 
        icon3Trusted="/assets/images/company-3.svg" 
        icon4Trusted="/assets/images/company-4.svg" 
        icon5Trusted="/assets/images/company-5.svg" 
        icon6Trusted="/assets/images/company-6.svg" 
        />

        <ThankyouSec
        bgImage="/assets/images/head-bg-3.png"
        image="/assets/images/Logo.svg"
        title="Thank you for your Interest in SquareUp."
        subtitle= "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        buttonText="Start Project"
        linkTo="/contact"
        />
        
        </>
  )
}

export default Home
