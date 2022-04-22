import Answer_text01 from './Answer-text01';
import Answer_text02 from './Answer-text02';
import Answer_text03 from './Answer-text03';
import react,{useState,useEffect} from 'react';
function Notice(){
    const pageNum = document.querySelectorAll('.btnBox>ul>li');
    const [nowClick, nextClick] = useState(null);
    const getClick = (e)=>{
        nextClick(e.target.id);
    }
    useEffect(
     (e)=>{ if (nowClick !== null){
        for(let i=0;i<pageNum.length;i++){
            pageNum[i].classList.remove('active');
        };
         let now = document.getElementById(nowClick);
         console.log(now);
         now.classList.add('active');
     }
    });
let content = null;
const [page, nextPage] = useState('page01');
    if(page == 'page01'){content = <Answer_text01/>}

    else if(page == 'page02'){content = <Answer_text02/>}

    else if(page == 'page03'){content = <Answer_text03/>
    }
    return(
    <div className="answer"> 
        <h2>답변게시판</h2>
        <div>
            <div className="subTitle">
             <span>No.</span>
             <span>내용</span>
             <span>Date</span>
            </div>
            {content}
        </div>
        <div className="btnBox">
            <ul>
                <li id="page01" className="active" onClick={(e)=>{getClick(e); nextPage('page01');}}>1</li>
                <li id="page02" onClick={(e)=>{getClick(e); nextPage('page02');}}>2</li>
                <li id="page03" onClick={(e)=>{getClick(e); nextPage('page03');}}>3</li>
            </ul>
            <button className="write">글쓰기</button>
        </div>
    </div>
    )
}export default Notice;