import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = () => {
        history.push('/quotes');
    };

    return <QuoteForm onAddQuote={addQuoteHandler}/>
};

export default NewQuote;