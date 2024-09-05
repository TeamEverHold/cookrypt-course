import axios from "axios";
import moment from "moment";
import { json } from "stream/consumers";

export type BrowserHistory = chrome.history.HistoryItem;

export interface PersonalData {
  history: BrowserHistory[];
}

export const getTags = (data: PersonalData) => {
  const url = "https://api.demo.fracher21.top/cookrypt/tags";
  const history = data.history.map((h) => {
    return {
      title: h.title || "",
      url: h.url || "",
      last_visit_time: moment(h.lastVisitTime || 0).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      visit_count: h.visitCount || 0,
    };
  });
  console.log(history);
  return axios.post(url, {history: history});
};
