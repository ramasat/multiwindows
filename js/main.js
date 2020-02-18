function HandleOnClick(obj) {
    var vid_elm;
    
    switch(obj.id)
    {
        case "TopButton":
            vid_elm = document.getElementById("vidwindow1");
            break;
        
        case "MidButton":
            vid_elm = document.getElementById("vidwindow2");
            break;
            
        case "BottomButton":
            vid_elm = document.getElementById("vidwindow3");
            break;
    }
    vid_elm.load();
    vid_elm.currentTime = 0;
    vid_elm.play();
}
