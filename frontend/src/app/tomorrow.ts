export interface Recommendation {
  hour: number;
  store_id: number;
}


export interface Tomorrow {
  [week_of_day: string]: { [time: string]: Recommendation };
}

