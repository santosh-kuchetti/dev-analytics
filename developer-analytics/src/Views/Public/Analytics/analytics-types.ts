export type MetaType = {
  label: string;
  fillColor: string;
};

export type ActiveDaysType = {
  days: number;
  insight: string[];
  isBurnOut: boolean;
};

export type ChildrenType = {
  count: string;
  label: string;
  fillColor: string;
};

export type DaywiseActivityItemChildrenType = {
  children: ChildrenType[];
};

export type DaywiseActivityType = {
  date: string;
  items: DaywiseActivityItemChildrenType;
};

export type TotalActivityItem = {
  name: string;
  value: string;
};

export type TotalActivity = Array<TotalActivityItem>;

export type ActivityMetaType = Array<MetaType>;
export type RowsType = {
  name: string;
  activeDays: ActiveDaysType;
  dayWiseActivity: DaywiseActivityType[];

  totalActivity: TotalActivity;
};
export type AuthorWorklogType = {
  activityMeta: ActivityMetaType;
  rows: RowsType[];
};
export type DevResponseType = {
  AuthorWorklog: AuthorWorklogType;
};
