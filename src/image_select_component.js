'use strict';


//variable that holds the state of image hold (background image)
var hold;
var mousein=1;
var x = 0, y = 0;
var tempx, tempy;
var widthcheck=true, heightcheck=true;

function Imageselectsection(props) {

    return <div id="image_select_section">
        
        <Imageselect />    
    </div>;
} 

function Imageselect(props) {

    return <div>
        <Imageprofile />
        
    </div>;
} 
function Imageprofile(props) {

    return <div id="profilesection" >

    </div>;
}
//onmousedown={function () { mousedown(e); }} onmouseup={mouseup()}
//onmousemove = { function() { drag_background_image(e); } }
function mousedown(e) {
    var rect = e.target.getBoundingClientRect();
    tempx = e.clientX - rect.left;
    tempy = e.clientY - rect.top;
    hold = 1;
    this.style.cursor = "grabbing";
}
function mouseup() {
    hold = 0;
    this.style.cursor = "grab";
}
function mouseout() {
    hold = 0;
    this.style.cursor = "";
}
function check_small_image() {
    var profelement = document.querySelector('#profilesection');
    var container = window.getComputedStyle(profelement, null);
    var img = container.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var imageex = new Image();
    imageex.src = img;
    var profwidth2 = parseInt(container.width.split('px')[0]);
    var profheight2 = parseInt(container.height.split('px')[0]);
    if (profwidth2 >= imageex.width) {
        widthcheck = false;
        profelement.style.backgroundPosition = (profwidth2 - imageex.width)/2 + 'px ' + '0';
    }
    else {
        widthcheck = true;
    }
    if (profheight2 >= imageex.height) {
        heightcheck = false;
        if (widthcheck == false) {
            profelement.style.backgroundPosition = (profwidth2 - imageex.width) / 2 + 'px ' + (profheight2 - imageex.height) / 2 + 'px';
        }
        else {
            profelement.style.backgroundPosition = profwidth2 - imageex.width / 2 + 'px ' + '0';
        }
    }
    else {
        heightcheck = true;
    }
    if (heightcheck && widthcheck) {
        profelement.style.backgroundPosition = '';
    }
}
//check_small_image();
function drag_background_image(e) {
    var el = this;
    var img = window.getComputedStyle(this, null).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var image = new Image();
    image.src = img;
    var profelement = document.querySelector('#profilesection');
    var prof_window = window.getComputedStyle(profelement, null);
    var profwidth = parseInt(prof_window.width.split('px')[0]);
    var profheight = parseInt(prof_window.height.split('px')[0]);
    if (hold && mousein) {
        var rect2 = e.target.getBoundingClientRect();
        var posx = e.clientX - rect2.left;
        var posy = e.clientY - rect2.top;
        var diffx = posx - tempx;
        var diffy = posy - tempy;
        tempx = posx;
        tempy = posy;
        //diffx *= -1;
        //diffx /= 5;
        //diffy *= -1;
        //diffy /= 5;
        diffx = parseInt(diffx);
        diffy = parseInt(diffy);
        if (this.style.backgroundPosition == null || this.style.backgroundPosition == '') {
            if (diffx > 0) {
                diffx = 0;
            }
            if (diffy > 0) {
                diffy = 0;
            }
            if (widthcheck == false) {
                diffx = (profwidth - img.width)/2;
            }
            if (heightcheck == false) {
                diffy = (profheight - img.height) / 2;
            }
            el.style.backgroundPosition = diffx + "px " + diffy + "px";
        }
        else {
            var actualvals = this.style.backgroundPosition.split(" ");
            //alert(image.width);
            var actx = parseInt(actualvals[0].replace("px", ""));
            var acty = parseInt(actualvals[1].replace("px", ""));
            actx += diffx;
            acty += diffy;
            if (actx > 0) {
                actx=0
            }
            if (actx < (image.width * -1) + profwidth) {
                actx = (image.width * -1) + profwidth;
            }
            if (acty > 0) {
                acty = 0
            }
            if (acty < (image.height * -1) + profheight) {
                acty = (image.height * -1) + profheight;
            }
            if (widthcheck == false) {
                actx = (profwidth - img.width) / 2;
            }
            if (heightcheck == false) {
                acty = (profheight - img.height) / 2;
            }
            el.style.backgroundPosition = actx + "px " + acty + "px";
        }
        
    }
    //for some reason the background positions need to be negative
    else {
        return;
    }
}



function renderimgsect() {
    var place = document.getElementById('imgs');
    ReactDOM.render(<Imageselectsection />, place);
    document.getElementById("profilesection").addEventListener("mousemove", drag_background_image);
    document.getElementById("profilesection").addEventListener("mousedown", mousedown);
    document.getElementById("profilesection").addEventListener("mouseup", mouseup);
    document.getElementById("profilesection").addEventListener("mouseout", mouseout);
}
export {
    hold, mousein, x, y, tempx, tempy, Imageselectsection, Imageselect, Imageprofile, mousedown,
    mouseup, drag_background_image, renderimgsect, check_small_image, mouseout
};