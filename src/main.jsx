import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import QueryProvider from './query/QueryProvider';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryProvider>
);
