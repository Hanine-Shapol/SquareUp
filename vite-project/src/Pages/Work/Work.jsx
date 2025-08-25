import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection"
import MmWorkList from "../../Components/MmWorkList/MmWorkList"

const Work = () => {
  return (
    <div>
            <div className="lm_whitespacing_x">
              <MmHeadOfSection
                title="Our Works"
                subtitle="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
                bgImage="/assets/images/head-bg-3.png"
              />
            </div>
      <MmWorkList />
    </div>
  )
}

export default Work
