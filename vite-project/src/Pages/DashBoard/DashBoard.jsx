import LMServicesCrad from "../../Components/LMServicesCrad/LMServicesCrad"
import LMWhyChooseCrad from "../../Components/LMWhyChooseCrad/LMWhyChooseCrad"
import './DashBoard.css'

const DashBoard = () => {
  return (
    <div className="lm-section-crud lm_whitespacing_x">
      <h1 className="lm-dashboard-title">Our Services</h1>
      <LMServicesCrad />
      <h1 className="lm-dashboard-title">Why Choose SquareUp?</h1>
      <LMWhyChooseCrad />
    </div>
  )
}

export default DashBoard
