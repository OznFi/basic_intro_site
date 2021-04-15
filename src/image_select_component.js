'use strict';


//variable that holds the state of image hold (background image)
var hold;
var mousein = 1;
var first = 0;
var x = 0, y = 0;
var tempx, tempy;
var widthcheck = true, heightcheck = true;
var imageobjects = []; //it is better to keep this info on the server side than juggling the info in here
var currentimg;
var imageslist = ['images/400img.jpg', 'images/plague_doc.jfif', 'images/angel2.jpg', 'images/dragonheadgreatshield.png'];

function Imageselectsection(props) {
    for (var o = 0; o < imageslist.length; o++) {
        imageobjects.push({ imagesource: imageslist[o], id: o, background_pos: '0 0' });
    }
    return <div id="image_select_section">
        
        <Imageselect />    
    </div>;
} 

function Imageselect(props) {

    return <div id='all_image_select_section'>
        <Imageprofile />
        <Imageoptions imagelist={imageslist}/>
    </div>;
} 
function Imageprofile(props) {

    return <div id="profilesection" style={{ backgroundImage: "url(" + imageslist[0] + ")" }}>

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
    var profelement = document.getElementById('profilesection');
    var container = profelement.style.backgroundImage;
    var compsize = window.getComputedStyle(profelement, null);
    var img = container.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var imageex = new Image();
    imageex.src = img;
    var profwidth2 = parseInt(compsize.width.split('px')[0]);
    var profheight2 = parseInt(compsize.height.split('px')[0]);
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
            profelement.style.backgroundPosition = '0 '+ (profheight2 - imageex.height) / 2 + 'px';
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
    var img = this.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    //window.getComputedStyle(this, null).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var image = new Image();
    image.src = img;
    var profelement = document.getElementById('profilesection');
    var compsize = window.getComputedStyle(profelement, null);
    //var prof_window = window.getComputedStyle(profelement, null);
    var profwidth = parseInt(compsize.width.split('px')[0]);
    var profheight = parseInt(compsize.height.split('px')[0]);
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
        var unevendiffx = diffx;
        var unevendiffy = diffy;
        if (this.style.backgroundPosition == null || this.style.backgroundPosition == '') {
            if (diffx > 0) {
                diffx = 0;
            }
            //if ((!(widthcheck && heightcheck)) && diffx >= unevendiffx) {
              //  actx = unevendiffx;
            //}
            if (diffy > 0) {
                diffy = 0;
            }
            //if ((!(widthcheck && heightcheck)) && diffy >= unevendiffy) {
              //  diffy = unevendiffy;
            //}
            if (widthcheck == false) {
                diffx = (profwidth - image.width)/2;
            }
            if (heightcheck == false) {
                diffy = (profheight - image.height) / 2;
            }
            el.style.backgroundPosition = diffx + "px " + diffy + "px";
        }
        else {
            var actualvals = this.style.backgroundPosition.split(" ");
            var actx = parseInt(actualvals[0].replace("px", ""));
            var acty = parseInt(actualvals[1].replace("px", ""));
            actx += diffx;
            acty += diffy;
            var unevenactx = actx;
            var unevenacty=acty;
            if (actx > 0) {
                actx = 0;
            }
            //if ((!(widthcheck && heightcheck)) && actx >= unevenactx) {
              //  actx = unevenactx;
            //}
            if (actx < (image.width * -1) + profwidth) {
                actx = (image.width * -1) + profwidth;
            }
            if (acty > 0) {
                acty = 0
            }
            //if ((!(widthcheck && heightcheck)) && acty >= unevenacty) {
              //  acty = unevenacty;
            //}
            if (acty < (image.height * -1) + profheight) {
                acty = (image.height * -1) + profheight;
            }
            if (widthcheck == false) {
                actx = (profwidth - image.width) / 2;
            }
            if (heightcheck == false) {
                acty = (profheight - image.height) / 2;
            }
            el.style.backgroundPosition = actx + "px " + acty + "px";
        }
        
    }
    //for some reason the background positions need to be negative
    else {
        return;
    }
}

function Imageoptions(props) {
    var list = props.imagelist;
    var rendlist = [];
    for (var i = 0; i < list.length; i++) {
        rendlist.push(<Providedimage imgsrc={list[i]}/>);
    }
    return <div id="provided_images">
        {rendlist}
    </div>;
}
function Providedimage(props) {

    return <img src={props.imgsrc} class='provided_image' onClick={change_profile}>

    </img>;
}
function change_profile(e) {
    var source = e.target.src;
    var el = document.getElementById('profilesection');
    el.style.setProperty('background-image', "url(" + source + ")"); //this needs to be the computed style or the other way around
    check_small_image();
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
    mouseup, drag_background_image, renderimgsect, check_small_image, mouseout, Imageoptions, Providedimage, imageslist,
    change_profile
};