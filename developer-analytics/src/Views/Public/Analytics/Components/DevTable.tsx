import { useEffect, useState } from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Typography,
  TableContainer,
  Grid,
  Skeleton,
} from "@mui/material";
import { RowsType, TotalActivity } from "../analytics-types";
import ToggleButton from "./ToggleButton";
import DateButton from "./DateButton";

const ActivityTableCell = styled(TableCell)({
  fontSize: "0.8rem",
});

type DevTablePropsType = {
  data: RowsType[];
  loading: boolean;
};

const DevTable = ({ data, loading }: DevTablePropsType) => {
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
              {!loading && data.length > 0 ? (
                <>
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
                          <Typography variant="s18w7c700">
                            {person.name}
                          </Typography>
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
                            {getActivityValue(
                              person.totalActivity,
                              "PR Merged"
                            )}
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
                            {getActivityValue(
                              person.totalActivity,
                              "PR Reviewed"
                            )}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="s18w4c400">
                            {" "}
                            {getActivityValue(
                              person.totalActivity,
                              "PR Comments"
                            )}
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
                </>
              ) : !loading && data.length == 0 ? (
                <Stack
                  sx={{
                    height: "50vh",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No Data
                </Stack>
              ) : (
                <TableCell colSpan={6}>
                  {" "}
                  <Grid container py={5} gap={2}>
                    {[0, 1, 2, 3, 4].map((Element, index) => (
                      <Grid item xs={12} key={index}>
                        <Skeleton
                          variant="rectangular"
                          sx={{ borderRadius: 7.5 }}
                          height={50}
                          width={"100%"}
                          key={Element}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </TableCell>
              )}
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
              {!loading && data.length > 0 ? (
                <>
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
                </>
              ) : !loading && data.length == 0 ? (
                <Stack
                  sx={{
                    height: "50vh",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No Data
                </Stack>
              ) : (
                <TableCell colSpan={6}>
                  <Grid container py={5} gap={2}>
                    {[0, 1, 2, 3, 4].map((Element, index) => (
                      <Grid item xs={12} key={index}>
                        <Skeleton
                          variant="rectangular"
                          sx={{ borderRadius: 7.5 }}
                          height={50}
                          width={"100%"}
                          key={Element}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </TableCell>
              )}
            </Table>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default DevTable;
