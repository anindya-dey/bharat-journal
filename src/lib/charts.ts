import upi from "../data/datasets/upi.json";
import janDhan from "../data/datasets/jan-dhan.json";
import rail from "../data/datasets/rail-electrification.json";
import solar from "../data/datasets/solar.json";
import renewable from "../data/datasets/renewable.json";
import electricity from "../data/datasets/electricity-access.json";
import metro from "../data/datasets/metro.json";
import highways from "../data/datasets/highways.json";
import internet from "../data/datasets/internet-users.json";
import mobile from "../data/datasets/mobile-connectivity.json";
import lifeExp from "../data/datasets/life-expectancy.json";
import literacy from "../data/datasets/literacy.json";
import poverty from "../data/datasets/poverty.json";
import food from "../data/datasets/food-production.json";
import aviation from "../data/datasets/aviation.json";
import port from "../data/datasets/port-traffic.json";
import aadhaar from "../data/datasets/aadhaar.json";

const datasets: Record<string, any> = {
  upi,
  "jan-dhan": janDhan,
  "rail-electrification": rail,
  solar,
  renewable,
  "electricity-access": electricity,
  metro,
  highways,
  "internet-users": internet,
  "mobile-connectivity": mobile,
  "life-expectancy": lifeExp,
  literacy,
  poverty,
  "food-production": food,
  aviation,
  "port-traffic": port,
  aadhaar,
};

/** Load a dataset by name (e.g. "upi") — throws if missing. */
export function dataset<T = any>(name: string): T {
  const d = datasets[name];
  if (!d) throw new Error(`Unknown dataset: ${name}`);
  return d as T;
}

/** Map a numeric series to {date, value} for LineChart. */
export function toSeries(
  rows: Record<string, any>[],
  yearKey: string | ((row: any) => string),
  valueKey: string,
): { date: string; value: number }[] {
  return rows.map((row) => ({
    date:
      typeof yearKey === "function" ? yearKey(row) : `${row[yearKey]}-01-01`,
    value: row[valueKey],
  }));
}
