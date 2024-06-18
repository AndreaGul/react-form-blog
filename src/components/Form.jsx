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
        <div className="container">
       <form onSubmit={onSubmit} className='form-container'>
        <input type="text" className='input-css'
            value={articleName}
            onChange={ e => setArticleName(e.target.value)}
        />
        <button className='button-css'>invia</button>
       </form>
       <ul className='ul-css'>
        {articles.map((article,index)=>(
             <li key={`article${index}`} className='li-css'>
                {article}
                <button onClick={()=>removeArticle(index)}>elimina</button>
             </li>
             
        ))}
       
       </ul>
       </div>
        </>
    )
}