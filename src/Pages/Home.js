import "./Home.css";
import { Link } from "react-router-dom";
import dollar from "../assets/dollar.jpeg";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Budget app!</h2>
      <div className="money">
        <img src={dollar} alt="Fake money"></img>
        <div className="quote">
          <p>
            Money wasn't money to Steph. Each digit was her labour, some of her
            toil in numbers. Each penny was her time, a symbol of her slavery.
            She didn't choose to work a boring data input job, but she couldn't
            choose to starve. The world was full of entrepreneurs with some
            wonderful invention to separate her from her cash at huge mark-ups.
            They were the ones that fleeced the flock and she was sick of it.
            They could call her "penny pincher," "cheapskate" or "skinflint" all
            they wanted. They weren't getting dime she didn't have to hand over.
          </p>
          <span>--by Angela Abraham--</span>
          <button>
            <Link to={"/transactions"}>Take me to the Transactions</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
