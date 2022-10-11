import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import Bedroom from "./Bedroom"

function FloorPlan(props) {
  return (
    <>
    <Bedroom bedNum="Bedroom 1" />
    <Kitchen />
    <Bath size="Full Bath" />
    <Bedroom bedNum="Bedroom 2" />
    <LivingRoom />
    <Bath size="Half Bath" />
    <Bedroom bedNum="Bedroom 3" />
    </>
  )
}

export default FloorPlan