import React, { useEffect, useState } from "react";
import {
  Stack,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Typography,
  TableContainer,
} from "@mui/material";
import { RowsType, TotalActivity } from "../analytics-types";
import ToggleButton from "./ToggleButton";
import DateButton from "./DateButton";

const ActivityTableCell = styled(TableCell)({
  fontSize: "0.8rem",
});

type DevTablePropsType = {
  data: RowsType[];
};

const DevTable = ({ data }: DevTablePropsType) => {
  const [showTotalActivity, setShowTotalActivity] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  useEffect(() => {
    if (
      !showTotalActivity &&
      data.length > 0 &&
      data[0].dayWiseActivity.length > 0
    ) {
      setSelectedDate(data[0].dayWiseActivity[0]?.date);
    }
  }, [showTotalActivity, data]);

  const handleDateChange = (date: string | null) => {
    setSelectedDate(date);
  };

  const getActivityValue = (activities: TotalActivity, name: string) => {
    const activity = activities.find((activity) => activity.name === name);
    return activity ? activity.value : 0;
  };

  return (
    <Stack spacing={2}>
      <ToggleButton
        showTotalActivity={showTotalActivity}
        setShowTotalActivity={setShowTotalActivity}
      />
      <Stack>
        {showTotalActivity ? (
          <TableContainer>
            <Table
              sx={{
                borderCollapse: "separate",
                borderSpacing: "0px 16px",
                marginX: 1,
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="s18w4c400">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Open
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Merged
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      Commits
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Reviewed
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Comments
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      Incident Alerts
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      Incidents Resolved
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((person) => (
                  <TableRow
                    key={person.name}
                    sx={{
                      borderRadius: "16px",
                      boxShadow: 1,
                    }}
                  >
                    <TableCell>
                      <Typography variant="s18w7c700">{person.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="s18w4c400">
                        {" "}
                        {getActivityValue(person.totalActivity, "PR Open")}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="s18w4c400">
                        {" "}
                        {getActivityValue(person.totalActivity, "PR Merged")}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="s18w4c400">
                        {" "}
                        {getActivityValue(person.totalActivity, "Commits")}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="s18w4c400">
                        {" "}
                        {getActivityValue(person.totalActivity, "PR Reviewed")}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="s18w4c400">
                        {" "}
                        {getActivityValue(person.totalActivity, "PR Comments")}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="s18w4c400">
                        {" "}
                        {getActivityValue(
                          person.totalActivity,
                          "Incident Alerts"
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="s18w4c400">
                        {getActivityValue(
                          person.totalActivity,
                          "Incidents Resolved"
                        )}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Stack>
            <DateButton
              data={data}
              handleDateChange={handleDateChange}
              selectedDate={selectedDate}
            />
            <Table
              sx={{
                borderCollapse: "separate",
                borderSpacing: "0px 16px",
                marginX: 1,
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="s18w4c400">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Open
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Merged
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      Commits
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Reviewed
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      PR Comments
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      Incident Alerts
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="s18w4c400"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      Incidents Resolved
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!showTotalActivity &&
                  data.map((person) =>
                    person.dayWiseActivity
                      .filter(
                        (day) => !selectedDate || day.date === selectedDate
                      )
                      .map((day) => (
                        <TableRow
                          key={`${person.name}-${day.date}`}
                          sx={{
                            borderRadius: "16px",
                            boxShadow: 1,
                          }}
                        >
                          <TableCell>
                            <Typography
                              variant="s18w7c700"
                              sx={{ whiteSpace: "nowrap" }}
                            >
                              {person.name}
                            </Typography>
                          </TableCell>
                          {day.items.children.map((item) => (
                            <ActivityTableCell
                              key={`${day.date}-${item.label}`}
                            >
                              <Typography
                                variant="s18w4c400"
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                {item.count}
                              </Typography>
                            </ActivityTableCell>
                          ))}
                        </TableRow>
                      ))
                  )}
              </TableBody>
            </Table>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default DevTable;
