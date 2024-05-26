import { Button, Stack, Typography, styled } from "@mui/material";
import { RowsType } from "../analytics-types";

const DateButtonsContainer = styled(Stack)({
  flexWrap: "wrap",
});

type DateButtonType = {
  data: RowsType[];
  handleDateChange: (date: string | null) => void;
  selectedDate: string | null;
};

const DateButton = ({
  data,
  handleDateChange,
  selectedDate,
}: DateButtonType) => {
  return (
    <DateButtonsContainer direction="row" spacing={2}>
      {data[0].dayWiseActivity.map((day) => (
        <Button
          key={day?.date}
          variant="contained"
          onClick={() => handleDateChange(day?.date)}
          sx={{
            flex: 1,
            backgroundColor:
              selectedDate === day?.date ? "#98A2B3" : "transparent",
            border: "1px solid",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <Typography variant="s12w4c700" sx={{ whiteSpace: "nowrap" }}>
            {day?.date}
          </Typography>
        </Button>
      ))}
    </DateButtonsContainer>
  );
};

export default DateButton;
