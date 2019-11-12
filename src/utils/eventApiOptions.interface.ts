interface EventApiOptions {
  apiUrl: string;
  extractData: (json: any) => any;
  fetchOptions: RequestInit;
}

export default EventApiOptions;
