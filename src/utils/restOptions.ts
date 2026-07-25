import EventApiOptions from "@/utils/eventApiOptions.interface";

const apiUrl = "https://people-api.herokuapp.com/events";

const fetchOptions: RequestInit = {};

const extractData = (json: any) => json;

const restOptions: EventApiOptions = {
  extractData,
  apiUrl,
  fetchOptions,
};

export default restOptions;
