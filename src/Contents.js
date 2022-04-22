import Notice from './Notice';
import Question from './Question';
import Answer from './Answer';
import React,{useState,useEffect} from 'react';
function Header(props){
    const menu = document.querySelectorAll('.nav>li');
    const [nowClick, nextClick] = useState(null);
    const getClick = (e)=>{nextClick(e.target.id);};

useEffect((e)=>{ if (nowClick !== null){
    for(let i=0;i<menu.length;i++){
        menu[i].classList.remove('now');
    };
     let menuClick = document.getElementById(nowClick);
         menuClick.classList.add('now');
 }
});
 const [contents, nextContents] = useState(null);
let content = null;
if(contents == 'notice'){
    content = <Notice/>
}
else if(contents == 'question'){
    content = <Question/>
}
else if(contents == 'answer'){
    content = <Answer/>
}
return(
    <div className="content">
        <header>
           <h1><a href="/">{props.title}</a></h1>
            <nav>
                <ul className="nav">
                    <li id="menu01" onClick={(e)=>{getClick(e); nextContents('notice');}}>공지사항</li>
                    <li id="menu02" onClick={(e)=>{getClick(e); nextContents('question');}}>질문게시판</li>
                    <li id="menu03" onClick={(e)=>{getClick(e); nextContents('answer');}}>답변게시판</li>
                </ul>
            </nav>
        </header>
        {content}
    </div>
)
}export default Header;