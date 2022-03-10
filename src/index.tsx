import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App /> 
  </QueryClientProvider>
  
  , document.getElementById('root'));

//removed React.StrictMode - See Readme.md for details
