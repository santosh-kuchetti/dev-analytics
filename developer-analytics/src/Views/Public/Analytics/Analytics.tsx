import { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { get_Dev_Deatils } from "../../../API";
import { DevResponseType } from "./analytics-types";
import DevTable from "./Components/DevTable";
import DevChart from "./Components/DevChart";

const Analytics = () => {
  const [devData, setDevData] = useState<DevResponseType | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [viewType, setViewType] = useState<"table" | "barChart">("table");

  useEffect(() => {
    const getDevData = async () => {
      try {
        const response = await get_Dev_Deatils();
        setDevData(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getDevData();
  }, []);

  const filteredData =
    devData?.AuthorWorklog?.rows?.filter((activity) =>
      activity.name.toLowerCase().includes(filter.toLowerCase())
    ) || [];

  return (
    <Stack spacing={3}>
      <Typography variant="s30w4c700">Dev dashboard</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          label="Search by Name"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "grey",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
              "& input": {
                fontSize: "20px",
              },
            },
            "& .MuiInputLabel-root": {
              color: "grey",
              fontSize: "20px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
          }}
        />
        <FormControl variant="outlined" size="small" sx={{ width: "200px" }}>
          <Select
            value={viewType}
            onChange={(e) =>
              setViewType(e.target.value as "table" | "barChart")
            }
            size="small"
            variant="outlined"
            style={{ fontSize: "20px", width: "100%" }}
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
              "& .MuiInputLabel-root": {
                display: "none",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                display: "none",
              },
              "& .MuiOutlinedInput-root": {
                "& .MuiSelect-root": {
                  paddingRight: "0",
                },
              },
              "& .MuiMenuItem-root": {
                fontSize: "20px",
              },
            }}
          >
            <MenuItem value="table">Table</MenuItem>
            <MenuItem value="barChart">Chart</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      {viewType === "table" ? (
        <DevTable data={filteredData} />
      ) : (
        <DevChart
          data={filteredData}
          activityColors={devData?.AuthorWorklog.activityMeta || []}
        />
      )}
    </Stack>
  );
};

export default Analytics;
