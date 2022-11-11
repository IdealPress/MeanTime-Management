// Styles
import "./Hero.css"

// Assets
import hero from "../assets/greenwich.jpeg"
import arrow from "../assets/Arrow.svg"

export default function Hero () {
  return (
    <section>
      <div 
        className="hero"
        style={{ backgroundImage: `url(${hero})` }} 
      >
        <div>
          <div className="left">
            <span>MeanTimes Newsletter</span>
            <h2>Flash Crash!</h2>
          </div>
          <div className="right">
            <img src={arrow} />
            <span>#1 — 14/10/22</span>
          </div>
        </div>
      </div>
    </section>
  )
}