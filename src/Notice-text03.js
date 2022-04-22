import React,{ useState } from "react";
function Article(props){
    const close = document.querySelector('.body');
    function Close(){
        close.style.display = 'none';
    }
    return  <article className="body">
        <h2>제목 : <span>{props.title}</span></h2>
        <p className="subTitle">
            작성날짜 : {props.date}
        </p>
        <div className="contents">
            {props.body}
        </div>
    </article>
}
function Content(props){
    const lis = []
    for(let i=0; i<props.news.length; i++){
        let t = props.news[i];
        lis.push(
        <li key={t.num}>
           <span className="news-num">{t.num}</span>
           <span className="news-title">
               <a id={t.num} href={"/read/"+t.num} onClick={(e)=>{
                   e.preventDefault();
                   props.onChange(Number(e.target.id));
                   }}>{t.title}</a>
            </span>
           <span className="news-date">{t.date}</span>
        </li>
        );
    }
    return <article>
        <ul className="text">
            {lis}
        </ul>
    </article>
}
function Text03(){
    const [mode, modeChange] = useState('welcome');
    const [id, setId] = useState(null);
    const news = [ 
        {num:'0'+ 5, title:"공지사항", date:"2022-04-05", body:"2022-04-05 공지사항 입니다."}, 
        {num:'0'+ 4, title:"공지사항", date:"2022-04-04", body:"2022-04-04 공지사항 입니다."}, 
        {num:'0'+ 3, title:"공지사항", date:"2022-04-03", body:"2022-04-03 공지사항 입니다."}, 
        {num:'0'+ 2, title:"공지사항", date:"2022-04-02", body:"2022-04-02 공지사항 입니다."},
        {num:'0'+ 1, title:"공지사항", date:"2022-04-01", body:"2022-04-01 공지사항 입니다."}
    ];
    let content = null;
    if(mode == 'read'){
        let title,body,date =null;
        for (let i=0; i<news.length; i++){
            if(news[i].num == id){
                title = news[i].title;
                body = news[i].body;
                date = news[i].date;
            }
        }
        
        content = <Article title={title} body={body} date={date}></Article>
    }    
return(
    <div>
        <div className="text">
            <Content news ={news} onChange={(_id)=>{modeChange('read'); setId(_id);}}></Content>
            {content}
        </div>
    </div>
)
}export default Text03;