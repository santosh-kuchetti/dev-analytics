import { useState, useEffect } from "react";
import { Stack, styled, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ActivityMetaType, RowsType } from "../analytics-types";
import ToggleButton from "./ToggleButton";
import DateButton from "./DateButton";

const BarChartContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  marginTop: "16px",
  width: "100%",
});

type DevTablePropsType = {
  data: RowsType[];
  activityColors: ActivityMetaType;
};

const DevChart = ({ data, activityColors }: DevTablePropsType) => {
  const [showTotalActivity, setShowTotalActivity] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    if (
      !showTotalActivity &&
      data.length > 0 &&
      data[0].dayWiseActivity.length > 0
    ) {
      setSelectedDate(data[0].dayWiseActivity[0].date);
    }
  }, [showTotalActivity, data]);

  const handleDateChange = (date: string | null) => {
    setSelectedDate(date);
  };

  const getTotalActivityData = () => {
    const activities = data[0].totalActivity.map((activity) => activity.name);
    return activities.map((activityName) => ({
      name: activityName,
      ...data.reduce<Record<string, number>>((acc, person) => {
        const activity = person.totalActivity.find(
          (a) => a.name === activityName
        );
        acc[person.name] = activity ? Number(activity.value) : 0;
        return acc;
      }, {}),
    }));
  };

  const getDayWiseActivityData = () => {
    if (!selectedDate) return [];
    const activities = data[0].dayWiseActivity[0].items.children.map(
      (activity) => activity.label
    );
    return activities.map((activityName) => ({
      name: activityName,
      ...data.reduce<Record<string, number>>((acc, person) => {
        const day = person.dayWiseActivity.find((d) => d.date === selectedDate);
        const activity = day
          ? day.items.children.find((a) => a.label === activityName)
          : null;
        acc[person.name] = activity ? Number(activity.count) : 0;
        return acc;
      }, {}),
    }));
  };

  return (
    <Stack spacing={2}>
      <ToggleButton
        showTotalActivity={showTotalActivity}
        setShowTotalActivity={setShowTotalActivity}
      />
      <Stack>
        {showTotalActivity ? (
          <BarChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={getTotalActivityData()}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {data.map((person, index) => (
                  <Bar
                    key={person.name}
                    dataKey={person.name}
                    fill={activityColors[index].fillColor}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </BarChartContainer>
        ) : (
          <Stack>
            <DateButton
              data={data}
              handleDateChange={handleDateChange}
              selectedDate={selectedDate}
            />
            <BarChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getDayWiseActivityData()}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {data.map((person, index) => (
                    <Bar
                      key={person.name}
                      dataKey={person.name}
                      fill={activityColors[index].fillColor}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </BarChartContainer>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default DevChart;
