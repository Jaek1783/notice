import Notice_text01 from './Notice-text01';
import Notice_text02 from './Notice-text02';
import Notice_text03 from './Notice-text03';
import react,{useState,useEffect} from 'react';
function Article(props){
    const close = document.querySelector('.body');
    return  <article className="body">
              <h2>제목:</h2>
         <form>    
            <p className='createTitle'><input type="text" name="title" placeholder='제목을 작성해 주세요.'/></p>
            <p className='createContent'><textarea name="body" placeholder='질문을 작성해 주세요.'></textarea></p>
            <p className='createBtn'><input type="submit" value="저장하기" /></p>
            
        </form>
    </article>
}
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
    if(page == 'page01'){
        content = <Notice_text01/>
    }
    else if(page == 'page02'){
        content = <Notice_text02/>
    }
    else if(page == 'page03'){
        content = <Notice_text03/>
    }
    let write = null;
    const [mode,modeChange]= useState(null);
    if(mode == 'read'){
        write = <Article></Article>
    }        
    return(
    <div className="notice"> 
        <h2>공지사항</h2>
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
                <li id="page01" onClick={(e)=>{getClick(e); nextPage('page01');}}>1</li>
                <li id="page02" onClick={(e)=>{getClick(e); nextPage('page02');}}>2</li>
                <li id="page03" onClick={(e)=>{getClick(e); nextPage('page03');}}>3</li>
            </ul>
            <button className="write" onClick={()=>{
                modeChange('read');
            }}>글쓰기</button>
        </div>
        {write}
    </div>
    )
}export default Notice;