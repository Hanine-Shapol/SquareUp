import ThankyouSec from "../../components/ThankyouSec/ThankyouSec"
import SaWorkone from "../../components/SaWorkone/SaWorkone" 
import SASquerup from "../../components/SASquerup/SASquerup"

const Process = () => {
  return (
     <>
        <SaWorkone
        bgImage= "/assets/images/head-bg-4.png"
        title="Process of Starting the Project"
        subtitle= "At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        />
        <SASquerup
        title="At SquareUp"
        subtitle= "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
        subtitleContainer="Here are ten examples of our notable works:"
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

export default Process
