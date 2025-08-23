import './DashBoard.css'
import RDProcessPageCrud from '../../components/RDProcessPageCrud/RDProcessPageCrud'
import RDAboutPageCrud from '../../components/RDAboutPageCrud/RDAboutPageCrud'

const DashBoard = () => {
  return (
    <div className='lm_whitespacing_x'>
        <h2>At SquareUp Crud</h2>
        <RDProcessPageCrud />
        <h2>Our Story Crud</h2>
        <RDAboutPageCrud/>
    </div>
)
}

export default DashBoard


