import { Outlet } from "react-router-dom";
import SASquerup from "../../components/SASquerup/SASquerup";
import SaWorkone from "../../components/SaWorkone/SaWorkone"; 
import ThankyouSec from "../../components/ThankyouSec/ThankyouSec";
import MmWorkList from "../../Components/MmWorkList/MmWorkList";

const Work = () => {
  return (
    <>
      <SaWorkone
        bgImage="/assets/images/head-bg-3.png"
        title="Our Works"
        subtitle="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
      />
      <SASquerup
        title="At SquareUp"
        subtitle="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
        subtitleContainer="Here are ten examples of our notable works:"
      />
      <MmWorkList />
      <ThankyouSec
        bgImage="/assets/images/head-bg-3.png"
        image="/assets/images/Logo-colorfull.svg"
        title="Let us Bring your Ideas to Life in the Digital World."
        subtitle="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        buttonText="Start Project"
        linkTo="/contact"
      />
      <Outlet />
    </>
  );
}

export default Work;