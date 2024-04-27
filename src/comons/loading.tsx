import { FadeLoader } from "react-spinners"

export const Loading = () => {
  return (
    <div className="BounceLoader">
<FadeLoader
  color="#36d7b7"
  speedMultiplier={1}
/>
    </div>
  )
}
