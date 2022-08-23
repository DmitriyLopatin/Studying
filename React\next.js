useEffect(()=>{
    !menuShow ? document.body.style.overflow = 'hidden': document.body.style.overflow = 'scroll' //применение стилей к body
  
    if(languageShow){            //добавление слушателя событий
      window.addEventListener('click', handleLanguageMenu)
    } 
    return () =>{                //удаление слушателя событий
      window.removeEventListener('click', handleLanguageMenu);
    };
 },[languageShow])
