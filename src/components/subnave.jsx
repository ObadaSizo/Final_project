import { useEffect } from 'react';
import './../style/sublinks.css'
import { useNavigate, useRouteLoaderData , useHistory} from 'react-router-dom';




function SubNave({data}) {
  useEffect(()=>{
      const sections = document.querySelectorAll("section[id]");
      window.addEventListener("scroll", navHighlighter);
          
      function navHighlighter() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 470;
          let sectionId = current.getAttribute("id");
                if (
                  scrollY > sectionTop &&
                  scrollY <= sectionTop + sectionHeight
                  ){
                    document.querySelector("a[href*=" + sectionId + "]").classList.add("active");
                  } else {
                    if(document.querySelector("a[href*=" + sectionId + "]") !== null){
                      document.querySelector("a[href*=" + sectionId + "]").classList.remove("active");
                    }  
                  }
                });
            }
          }
     )
     
     return(
          <a className="sub" href={'#'+data.id}>{data.link}</a>
          ) 
     }

export default SubNave; 