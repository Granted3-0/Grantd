import Form from "../components/form/Form";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Homepage() {
  const text =
    "Granted is a milestone-based granting solution providing visibility, bidirectional communication & accountability for sponsors & developers- to help all of us builders get further, faster.";
  return (
    <div id="homepage">
      <h1 id="title">granted</h1>
      <h1>a milestone-based granting solution</h1>
      <div id="homepage-text">
        <h4>{text}</h4>
      </div>

      <div class="box-div">
        <span class="boxes">
          <div class="box-title">Visibility 👀</div>
          <div class="box-content">For both sponsors & developers.</div>
        </span>
        <span class="boxes">
          <div class="box-title">Bidirectional Communication 📡</div>
          <div class="box-content"> Progress & funding notifications.</div>
        </span>
        <span class="boxes">
          <div class="box-title">Accountability 💯</div>
          <div class="box-content"> Clear milestones & deliverables.</div>
        </span>
      </div>

      <Button id="grant-button">
        <Link id="links-grant" to="/grants" element={<Form />}>
          check out our grants
        </Link>
      </Button>
    </div>
  );
}

export default Homepage;
