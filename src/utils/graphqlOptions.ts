import EventApiOptions from '@/utils/eventApiOptions.interface';

const eventsRequest = {
  query: `
    query {
      events {
        id
        title
        price
        description
        date
      }
    }
  `,
};

const apiUrl = 'https://event-api-graphql.herokuapp.com/api';

const fetchOptions: RequestInit = {
  method: 'POST',
  body: JSON.stringify(eventsRequest),
  headers: {
    'Content-Type': 'application/json'
  }
};

const extractData = (json: any) => json.data.events;

const graphqlOptions: EventApiOptions = {
  extractData,
  apiUrl,
  fetchOptions
};

export default graphqlOptions;
