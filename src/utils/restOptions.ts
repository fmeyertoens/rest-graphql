import EventApiOptions from '@/utils/eventApiOptions.interface';

const apiUrl = 'https://people-api.herokuapp.com/events';

const fetchOptions: RequestInit = {};

const extractData = (json: any) => json;

const graphqlOptions: EventApiOptions = {
  extractData,
  apiUrl,
  fetchOptions
};

export default graphqlOptions;
