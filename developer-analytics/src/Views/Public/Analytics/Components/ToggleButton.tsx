import { Button, Stack, Typography } from "@mui/material";

type ToggleButtonType = {
  showTotalActivity: boolean;
  setShowTotalActivity: (data: boolean) => void;
};

const ToggleButton = ({
  showTotalActivity,
  setShowTotalActivity,
}: ToggleButtonType) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={() => setShowTotalActivity(true)}
        sx={{
          backgroundColor: showTotalActivity ? "#98A2B3" : "transparent",
          border: "1px solid",
          outline: "none",
          boxShadow: "none",
        }}
      >
        <Typography variant="s18w4c400">Show Total Activity</Typography>
      </Button>
      <Button
        variant="contained"
        onClick={() => setShowTotalActivity(false)}
        sx={{
          backgroundColor: showTotalActivity ? "transparent" : "#98A2B3",
          border: "1px solid",
          outline: "none",
          boxShadow: "none",
        }}
      >
        <Typography variant="s18w4c400">Show Day Wise Activity</Typography>
      </Button>
    </Stack>
  );
};

export default ToggleButton;
