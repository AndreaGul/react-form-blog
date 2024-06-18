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

    const removeArticle = (articleIndex)=>{
        setArticles(array => array.filter((value,i)=> i !== articleIndex));
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
       <ul>
        {articles.map((article,index)=>(
             <li key={`article${index}`}>
                {article}
                <button onClick={()=>removeArticle(index)}>elimina</button>
             </li>
             
        ))}
       
       </ul>
        </>
    )
}