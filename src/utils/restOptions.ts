import EventApiOptions from '@/utils/eventApiOptions.interface';

const apiUrl = 'http://192.168.2.105:5000/events';

const fetchOptions: RequestInit = {};

const extractData = (json: any) => json;

const graphqlOptions: EventApiOptions = {
  extractData,
  apiUrl,
  fetchOptions
};

export default graphqlOptions;
