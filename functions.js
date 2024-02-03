function toggleStyleSheet(){
    var element = document.getElementById("mainStyleSheet");
    var filename = element.getAttribute("href");
    
    if(filename === "style.css")
        filename = "style2.css";
    else
        filename = "style.css";
    
    element.setAttribute("href",filename);
    
    localStorage.setItem("style",filename);
}


window.onload = function(){
    var style = localStorage.getItem("style");
    var element = document.getElementById("mainStyleSheet");
    if(!style)
        style = "style.css"
    element.setAttribute("href",style);
}