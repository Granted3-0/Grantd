import Button from "@mui/material/Button";
function UnlockButton() {
  return (
    <div>
      <Button
        id="connect-button"
        onClick={
          window.unlockProtocol && window.unlockProtocol.loadCheckoutModal
        }
      >
        Unlock your homepage
      </Button>
    </div>
  );
}

export default UnlockButton;
