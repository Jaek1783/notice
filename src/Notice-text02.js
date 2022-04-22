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
function Text02(){
    const [mode, modeChange] = useState('welcome');
    const [id, setId] = useState(null);
    const news = [
        {num:10, title:"공지사항", date:"2022-04-10", body:"2022-04-10 공지사항 입니다."},
        {num:'0'+ 9, title:"공지사항", date:"2022-04-09", body:"2022-04-09 공지사항 입니다."},
        {num:'0'+ 8, title:"공지사항", date:"2022-04-08", body:"2022-04-08 공지사항 입니다."},
        {num:'0'+ 7, title:"공지사항", date:"2022-04-07", body:"2022-04-07 공지사항 입니다."},
        {num:'0'+ 6, title:"공지사항", date:"2022-04-06", body:"2022-04-06 공지사항 입니다."}
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
}export default Text02;