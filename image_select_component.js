'use strict';

//variable that holds the state of image hold (background image)

var hold;
var mousein = 1;
//var first = 0;
//var x = 0, y = 0;
var total_profile_number = 4;
var tempx, tempy;
var widthcheck = true,
    heightcheck = true;
var imageobjects = []; //it is better to keep this info on the server side than juggling the info in here
var profile_backgroundpos_x, profile_backgroundpos_y;
var imageslist = ['images/400img.jpg', 'images/plague_doc.jfif', 'images/angel2.jpg', 'images/dragonheadgreatshield.png'];
var currentimg = imageslist[0];

function Imageselectsection(props) {
    for (var o = 0; o < imageslist.length; o++) {
        imageobjects.push({ imagesource: imageslist[o], id: o, background_pos: '0 0' });
    }
    return React.createElement(
        'div',
        { id: 'image_select_section' },
        React.createElement(
            'h2',
            null,
            'Pick an Image for Your Profile'
        ),
        React.createElement(Addimagesection, null),
        React.createElement(Imageselect, null)
    );
}
function addimages(e) {
    if (imageslist.length > total_profile_number) {
        imageslist.pop();
    }
    var files = e.target.files;
    var reader = new FileReader();
    reader.onload = function () {
        imageslist.push(reader.result);
        renderimgsect();
        e.target.value = null; //for some reaseon this allows me to add back the file again
        //setTimeout(manual_set_images(), 500);
        //manual_set_images();
    };
    reader.readAsDataURL(files[0]);
    // var lastind = z.lastIndexOf("\\");
    //var crop = z.slice(lastind + 1, z.length);
    //images.push({ source: crop, index: images.length });
    //render_carousel();
}
function Addimagesection(props) {

    return React.createElement(
        'div',
        { id: 'profile_imageaddition' },
        React.createElement(
            'label',
            { 'for': 'profile_input_image' },
            'Add Image (You can have only 1 custom image!)'
        ),
        React.createElement('input', { type: 'file', name: 'profile_input_image', accept: 'image/jpg, image/png', onInput: addimages })
    );
}

function Imageselect(props) {

    return React.createElement(
        'div',
        { id: 'all_image_select_section' },
        React.createElement(Imageprofile, null),
        React.createElement(Imageoptions, { imagelist: imageslist })
    );
}
function Imageprofile(props) {

    return React.createElement('div', { id: 'profilesection', style: { backgroundImage: "url(" + imageslist[0] + ")" } });
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
function check_small_image(added) {
    var profelement = document.getElementById('profilesection');
    var container = profelement.style.backgroundImage;
    var compsize = window.getComputedStyle(profelement, null);
    var img = container.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    if (added) {
        img = imageslist[imageslist.length - 1];
    }
    //alert(imageslist[imageslist.length-1]);
    var imageex = new Image();
    imageex.src = img;
    var profwidth2 = parseInt(compsize.width.split('px')[0]);
    var profheight2 = parseInt(compsize.height.split('px')[0]);
    if (profwidth2 >= imageex.width) {
        widthcheck = false;
        profelement.style.backgroundPosition = (profwidth2 - imageex.width) / 2 + 'px ' + '0';
        profile_backgroundpos_x = (profwidth2 - imageex.width) / 2;
        profile_backgroundpos_y = 0;
    } else {
        widthcheck = true;
    }
    if (profheight2 >= imageex.height) {
        heightcheck = false;
        if (widthcheck == false) {
            profelement.style.backgroundPosition = (profwidth2 - imageex.width) / 2 + 'px ' + (profheight2 - imageex.height) / 2 + 'px';
            profile_backgroundpos_x = (profwidth2 - imageex.width) / 2;
            profile_backgroundpos_y = (profheight2 - imageex.height) / 2;
        } else {
            profelement.style.backgroundPosition = '0 ' + (profheight2 - imageex.height) / 2 + 'px';
            profile_backgroundpos_x = 0;
            profile_backgroundpos_y = (profheight2 - imageex.height) / 2;
        }
    } else {
        heightcheck = true;
    }
    if (heightcheck && widthcheck) {
        profelement.style.backgroundPosition = '';
        profile_backgroundpos_x = 0;
        profile_backgroundpos_y = 0;
    }
}
//check_small_image();
function drag_background_image(e) {
    var el = this;
    //var img = this.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var img = this.style.backgroundImage.slice(5, -2);
    //alert(img);
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
                diffx = (profwidth - image.width) / 2;
            }
            if (heightcheck == false) {
                diffy = (profheight - image.height) / 2;
            }
            el.style.backgroundPosition = diffx + "px " + diffy + "px";
            profile_backgroundpos_x = difx;
            profile_backgroundpos_y = diffy;
        } else {
            var actualvals = this.style.backgroundPosition.split(" ");
            var actx = parseInt(actualvals[0].replace("px", ""));
            var acty = parseInt(actualvals[1].replace("px", ""));
            actx += diffx;
            acty += diffy;
            var unevenactx = actx;
            var unevenacty = acty;
            if (actx > 0) {
                actx = 0;
            }
            //if ((!(widthcheck && heightcheck)) && actx >= unevenactx) {
            //  actx = unevenactx;
            //}
            if (actx < image.width * -1 + profwidth) {
                actx = image.width * -1 + profwidth;
            }
            if (acty > 0) {
                acty = 0;
            }
            //if ((!(widthcheck && heightcheck)) && acty >= unevenacty) {
            //  acty = unevenacty;
            //}
            if (acty < image.height * -1 + profheight) {
                acty = image.height * -1 + profheight;
            }
            if (widthcheck == false) {
                actx = (profwidth - image.width) / 2;
            }
            if (heightcheck == false) {
                acty = (profheight - image.height) / 2;
            }
            el.style.backgroundPosition = actx + "px " + acty + "px";
            profile_backgroundpos_x = actx;
            profile_backgroundpos_y = acty;
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
        rendlist.push(React.createElement(Providedimage, { imgsrc: list[i] }));
    }
    return React.createElement(
        'div',
        { id: 'provided_images' },
        rendlist
    );
}
function Providedimage(props) {

    return React.createElement('img', { src: props.imgsrc, 'class': 'provided_image', onClick: change_profile });
}
function change_profile(e) {
    var source = e.target.src;
    var el = document.getElementById('profilesection');
    el.style.setProperty('background-image', "url(" + source + ")"); //this needs to be the computed style or the other way around
    currentimg = source;
    if (source == imageslist[imageslist.length - 1]) {
        alert('yeah');
        check_small_image(true);
        return;
    }
    check_small_image(false);
}
function renderimgsect() {
    var place = document.getElementById('imgs');
    ReactDOM.render(React.createElement(Imageselectsection, null), place);
    document.getElementById("profilesection").addEventListener("mousemove", drag_background_image);
    document.getElementById("profilesection").addEventListener("mousedown", mousedown);
    document.getElementById("profilesection").addEventListener("mouseup", mouseup);
    document.getElementById("profilesection").addEventListener("mouseout", mouseout);
}
export { hold, mousein, tempx, tempy, Imageselectsection, Imageselect, Imageprofile, mousedown, mouseup, drag_background_image, renderimgsect, check_small_image, mouseout, Imageoptions, Providedimage, imageslist, change_profile, profile_backgroundpos_x, profile_backgroundpos_y, currentimg };