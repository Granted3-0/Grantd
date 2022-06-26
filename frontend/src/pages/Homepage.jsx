function Homepage() {
  const text =
    "Granted is a milestone-based granting solution providing visibility, bidirectional communication & accountability for sponsors & developers- to help all of us builders get further, faster.";
  return (
    <div id="homepage">
      <h1 id="title">welcome to granted!</h1>
      <div id="homepage-text">
        <h1>a milestone-based granting solution</h1>
        <h4>{text}</h4>
      </div>
      {/* <h4>TO GET STARTED, CONNECT TO YOUR WALLET OR UNLOCK</h4> */}

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
    </div>
  );
}

export default Homepage;
