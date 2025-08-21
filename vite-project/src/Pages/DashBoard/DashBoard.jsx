import LMServicesCrad from "../../Components/LMServicesCrad/LMServicesCrad"
import LMWhyChooseCrad from "../../Components/LMWhyChooseCrad/LMWhyChooseCrad"
import './DashBoard.css'

const DashBoard = () => {
  return (
    <div className="lm-section-crud lm_whitespacing_x">
      <h1>Our Services</h1>
      <LMServicesCrad />
      <h1>Why Choose Section</h1>
      <LMWhyChooseCrad />
    </div>
  )
}

export default DashBoard
