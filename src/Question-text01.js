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
function Text01(){
    const [mode, modeChange] = useState('welcome');
    const [id, setId] = useState(null);
    const news = [
        {num:15, title:"제목15", date:"2022-04-15", body:"질문입니다 프론트 엔드를 하고 싶은데 무엇부터 배워야 하나요?"},
        {num:14, title:"제목14", date:"2022-04-14", body:"질문2"},
        {num:13, title:"제목13", date:"2022-04-13", body:"질문3"}, 
        {num:12, title:"제목12", date:"2022-04-12", body:"질문4"},
        {num:11, title:"제목11", date:"2022-04-11", body:"질문5"}
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
}export default Text01;