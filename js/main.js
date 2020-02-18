function HandleOnClick(obj) {
    var vid_elm;
    
    switch(obj.id)
    {
        case "TopButton":
            vid_elm = document.getElementById("vidwindow1");
            vid_elm.src="https://upload.wikimedia.org/wikipedia/commons/transcoded/8/88/Big_Buck_Bunny_alt.webm/Big_Buck_Bunny_alt.webm.360p.vp9.webm";
            vid_elm.type="video/webm";
            break;
        
        case "MidButton":
            vid_elm = document.getElementById("vidwindow2");
            vid_elm.src="https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a2/Elephants_Dream_%282006%29.webm/Elephants_Dream_%282006%29.webm.360p.vp9.webm";
            vid_elm.type="video/webm";
            break;
            
        case "BottomButton":
            vid_elm = document.getElementById("vidwindow3");
            vid_elm.src="https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Glazing-Doughnuts.webm/Glazing-Doughnuts.webm.360p.vp9.webm";
            vid_elm.type="video/webm";
            break;
    }
    vid_elm.load();
    vid_elm.currentTime = 0;
    vid_elm.play();
}
