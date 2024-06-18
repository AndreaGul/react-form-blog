import {useState} from 'react'

export default function(){

    const [articles, setArticles] = useState([]);
    const [articleName, setArticleName] = useState('');

    
    console.log(articleName,articles);
    
    const onSubmit = (e) => {
        e.preventDefault();

        setArticles(array => ([articleName, ...array]));
        setArticleName('');

    }

    return(
        <>
       <form onSubmit={onSubmit}>
        <input type="text"
            value={articleName}
            onChange={ e => setArticleName(e.target.value)}
        />
        <button>invia</button>
       </form>
        </>
    )
}