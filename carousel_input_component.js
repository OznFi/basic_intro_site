'use strict';

var images = [{ source: 'images/400img.jpg', index: 0 }, { source: 'images/angel2.jpg', index: 1 }, { source: 'images/dragonheadgreatshield.png', index: 2 }];
var state0 = true;
var currentimageindex = 0;
var initial_left_state = true;var initial_right_state = true;
function Fullcarousel(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { id: 'carousel_zoom_image', onClick: unzoom },
            React.createElement('img', { id: 'carousel_zoomed_image' })
        ),
        React.createElement(Addcarouselimages, null),
        React.createElement(Carousel, null)
    );
}
function zoom_image(e) {
    var cont = e.target;
    var zoomsection = document.getElementById("carousel_zoom_image");
    var zoomimage = document.getElementById("carousel_zoomed_image");
    var mainimg = images[currentimageindex].source;
    zoomimage.src = mainimg;
    zoomsection.style.display = "flex";
    //for (let i = 0; i < 3; i++) {
    //  if (cont.children[i].classList.contains("center_image")) {
    //    mainimg = cont.children[i];
    //}
    //}
}
function unzoom() {
    var zoomsection = document.getElementById("carousel_zoom_image");
    zoomsection.style.display = "none";
}
function manual_set_images() {
    var imageright = document.querySelector(".carousel_main_image .right_image");
    var imageleft = document.querySelector(".carousel_main_image .left_image");
    var imagecenter = document.querySelector(".carousel_main_image .center_image");
    if (currentimageindex >= images.length) {
        currentimageindex = images.length - 1;
    }
    imagecenter.src = images[currentimageindex].source;
    //alert(images[currentimageindex].source);
    if (currentimageindex - 1 < 0) {
        imageleft.src = images[images.length - 1].source;
        //alert('we are here');
    } else {
        imageleft.src = images[currentimageindex - 1].source;
    }
    if (currentimageindex + 1 >= images.length) {
        imageright.src = images[0].source;
    } else {
        imageright.src = images[currentimageindex + 1].source;
    }
}
function addimages(e) {
    var files = e.target.files;
    var reader = new FileReader();
    reader.onload = function () {
        images.push({ source: reader.result, index: images.length });
        render_carousel();
        if (images.length == 2) {
            state0 = true;
            init_state();
        }
        if (images.length == 1) {
            currentimageindex = 0;
        }
        e.target.value = null; //for some reaseon this allows me to add back the file again
        setTimeout(manual_set_images(), 500);
        //manual_set_images();
    };
    reader.readAsDataURL(files[0]);
    // var lastind = z.lastIndexOf("\\");
    //var crop = z.slice(lastind + 1, z.length);
    //images.push({ source: crop, index: images.length });
    //render_carousel();
}
function Addcarouselimages(props) {
    var headstr = "Add More Images";
    if (images.length == 0) {
        headstr = "Start adding Images";
    }
    return React.createElement(
        'div',
        { id: 'full_carousel_head' },
        React.createElement(
            'div',
            { id: 'carousel_image_addition_head' },
            React.createElement(
                'span',
                { id: 'carousel_image_header' },
                'Your Images'
            ),
            React.createElement(
                'div',
                { id: 'carousel_image_additionbut' },
                React.createElement(
                    'label',
                    { 'for': 'carousel_img_select' },
                    'Add Image'
                ),
                React.createElement('input', { type: 'file', name: 'carousel_img_select', accept: 'image/jpg, image/png', onInput: addimages })
            )
        ),
        React.createElement(Addedimages, null)
    );
}
function check_file(fpath) {}
function Addedimages(props) {
    var imag = [];
    for (var i = 0; i < images.length; i++) {
        imag.push(React.createElement(Carouseladdedimage, { source: images[i].source }));
    }
    return React.createElement(
        'div',
        { id: 'carousel_added_head_images' },
        imag
    );
}
function Carouseladdedimage(props) {
    var sorc = props.source;
    return React.createElement(
        'div',
        { 'class': 'carouselhead_image_container' },
        React.createElement('img', { 'class': 'added_carouselhead_image', src: sorc }),
        React.createElement(
            'button',
            { 'class': 'remove_image_but', onClick: remove_image },
            'X'
        )
    );
}
function remove_image(e) {
    var img = e.target.parentElement.children[0].src;
    //alert(img);
    for (var i = 0; i < images.length; i++) {
        if (images[i].source == img.split("http://localhost/basic_intro_site/")[1] || images[i].source == img) {
            images.splice(i, 1);
        }
    }
    render_carousel();
    setTimeout(manual_set_images(), 500);
}
function init_state() {
    if (state0) {
        var imgdiv = document.querySelector(".carousel_main_image");
        var imageright = document.querySelector(".carousel_main_image .right_image");
        var imageleft = document.querySelector(".carousel_main_image .left_image");
        var imgcontainer = window.getComputedStyle(imgdiv, null);
        var width = imgcontainer.width.split("px")[0];
        imageright.style.right = "-" + width + "px";
        imageleft.style.left = "-" + width + "px";
        state0 = false;
        var allindbuttons = document.querySelectorAll(".carousel_index");
        for (var i = 0; i < allindbuttons.length; i++) {
            if (allindbuttons[i].classList.contains("active_index")) {
                allindbuttons[i].classList.remove("active_index");
            }
        }
        allindbuttons[0].classList.add("active_index");
    }
}
function Carousel(props) {
    if (images.length == 0) {
        return React.createElement(
            'div',
            { 'class': 'carousel' },
            React.createElement(
                'p',
                null,
                'No images yet!'
            )
        );
    }
    if (images.length == 1) {
        return React.createElement(
            'div',
            { 'class': 'carousel' },
            React.createElement(Indexbuttons, null),
            React.createElement(
                'div',
                { 'class': 'carousel_main_image', onClick: zoom_image },
                React.createElement('img', { 'class': 'carouselimage center_image', src: images[0].source })
            )
        );
    }
    return React.createElement(
        'div',
        { 'class': 'carousel' },
        React.createElement(
            'div',
            { 'class': 'carousel_left_button' },
            React.createElement(
                'button',
                { type: 'button', onClick: function onClick() {
                        transition_to_left({ status: false, ind: '' });
                    } },
                "<"
            )
        ),
        React.createElement(
            'div',
            { 'class': 'carousel_right_button' },
            React.createElement(
                'button',
                { type: 'button', onClick: function onClick() {
                        transition_to_right({ status: false, ind: '' });
                    } },
                ">"
            )
        ),
        React.createElement(Indexbuttons, null),
        React.createElement(
            'div',
            { 'class': 'carousel_main_image', onClick: zoom_image },
            React.createElement('img', { 'class': 'carouselimage center_image', src: images[0].source }),
            React.createElement('img', { 'class': 'carouselimage right_image', src: images[1].source }),
            React.createElement('img', { 'class': 'carouselimage left_image', src: images[images.length - 1].source })
        )
    );
}
function Indexbuttons(props) {
    var buttons = [];
    for (var i = 0; i < images.length; i++) {
        buttons.push(React.createElement('button', { type: 'button', 'class': "imageindex_" + i + " carousel_index", onClick: carousel_indexing }));
    }
    return React.createElement(
        'div',
        { 'class': 'carousel_index_buttons' },
        buttons
    );
}
function carousel_indexing(e) {
    var indbutton = e.target;
    var allindbuttons = document.querySelectorAll(".carousel_index");
    for (var i = 0; i < allindbuttons.length; i++) {
        if (allindbuttons[i].classList.contains("active_index")) {
            allindbuttons[i].classList.remove("active_index");
        }
    }
    indbutton.classList.add("active_index");
    var index = parseInt(indbutton.classList[0].split("imageindex_")[1]);
    var indobject = { status: true, ind: index };
    if (currentimageindex < index) {
        transition_to_right(indobject);
    }
    if (currentimageindex > index) {
        transition_to_left(indobject);
    }
}
function transition_to_right(indexed) {
    var imgdiv = document.querySelector(".carousel_main_image");
    var imageright = document.querySelector(".carousel_main_image .right_image");
    var imageleft = document.querySelector(".carousel_main_image .left_image");
    var imgcontainer = window.getComputedStyle(imgdiv, null);
    var width = imgcontainer.width.split("px")[0];
    var imagecenter = document.querySelector(".carousel_main_image .center_image");
    currentimageindex++;
    var specificind;
    if (indexed.status) {
        currentimageindex = indexed.ind;
        specificind = currentimageindex + 1;
        if (specificind >= images.length) {
            specificind = 0;
        }
        imageright.src = images[currentimageindex].source;
    }
    if (currentimageindex >= images.length) {
        currentimageindex = 0;
    }
    var indexcarrier = currentimageindex;
    if (imageright.src.split("http://localhost/basic_intro_site/")[1] == images[indexcarrier].source && !indexed.status || imageright.src == images[indexcarrier].source) {
        while (imageright.src.split("http://localhost/basic_intro_site/")[1] == images[indexcarrier].source || imageright.src == images[indexcarrier].source) {
            indexcarrier++;
            if (indexcarrier >= images.length) {
                indexcarrier = 0;
            }
        }
    }
    //imageright.style.right = 0; //??
    imageright.style.left = 0;
    imageright.style.right = width + "px";
    imagecenter.style.left = "-" + width + "px";
    imageright.classList.remove("right_image");
    imageright.classList.add("center_image");
    imagecenter.classList.remove("center_image");
    imagecenter.classList.add("left_image");
    imgdiv.removeChild(imageleft);
    var newright = document.createElement("img");
    newright.classList.add("carouselimage");newright.classList.add("right_image");
    newright.style.right = "-" + width + "px"; //check if it needs the minus sign
    newright.src = images[indexcarrier].source;
    if (indexed.status) {
        newright.src = images[specificind].source;
        setTimeout(function () {
            imagecenter.src = images[currentimageindex - 1].source;
        }, 300);
    }
    //if (initial_right_state) {
    //  newright.src = images[currentimageindex+1].source;
    //initial_right_state = false;
    //initial_left_state = true;
    //}
    //if (currentimageindex == 0) {
    //  newright.src = images[currentimageindex].source;
    //}
    var allindbuttons = document.querySelectorAll(".carousel_index");
    for (var i = 0; i < allindbuttons.length; i++) {
        if (allindbuttons[i].classList.contains("active_index")) {
            allindbuttons[i].classList.remove("active_index");
        }
    }
    allindbuttons[currentimageindex].classList.add("active_index");
    imgdiv.appendChild(newright);
    //alert(currentimageindex);
    //imageleft.classList.remove("left_image");
    //imageleft.classList.add("right_image");
    //imageleft.src = images[currentimageindex + 1];
}
function transition_to_left(indexed) {
    var imgdiv = document.querySelector(".carousel_main_image");
    var imageright = document.querySelector(".carousel_main_image .right_image");
    var imageleft = document.querySelector(".carousel_main_image .left_image");
    var imgcontainer = window.getComputedStyle(imgdiv, null);
    var width = imgcontainer.width.split("px")[0];
    var imagecenter = document.querySelector(".carousel_main_image .center_image");
    currentimageindex--;
    var specificind;
    if (indexed.status) {
        currentimageindex = indexed.ind;
        specificind = currentimageindex - 1;
        if (specificind < 0) {
            specificind = images.length - 1;
        }
        imageleft.src = images[currentimageindex].source;
    }
    if (currentimageindex < 0) {
        currentimageindex = images.length - 1;
    }
    var indexcarrier = currentimageindex;
    //alert('arrayval is ' + images[currentimageindex].source + " and imageleft is " + imageleft.src.split("http://localhost/basic_intro_site/")[1]);
    if (imageleft.src.split("http://localhost/basic_intro_site/")[1] == images[indexcarrier].source && !indexed.status || imageleft.src == images[indexcarrier].source) {
        while (imageleft.src.split("http://localhost/basic_intro_site/")[1] == images[indexcarrier].source || imageleft.src == images[indexcarrier].source) {
            //alert("inloop");
            //currentimageindex--;
            indexcarrier--;
            if (indexcarrier < 0) {
                indexcarrier = images.length - 1;
            }
        }
        //alert(currentimageindex);
    }
    imageleft.style.left = 0;
    imageleft.style.right = "";
    imgdiv.removeChild(imageright);
    imagecenter.style.right = "-" + width + "px";
    imagecenter.style.left = "";
    imageleft.classList.remove("left_image");
    imageleft.classList.add("center_image");
    imagecenter.classList.remove("center_image");
    imagecenter.classList.add("right_image");
    var newleft = document.createElement("img");
    newleft.classList.add("carouselimage");newleft.classList.add("left_image");
    newleft.style.left = "-" + width + "px";
    newleft.src = images[indexcarrier].source;
    if (indexed.status) {
        newleft.src = images[specificind].source;
        setTimeout(function () {
            imagecenter.src = images[currentimageindex + 1].source;
        }, 300);
    }
    // if (currentimageindex == images.length - 1) {
    //   newleft.src = images[currentimageindex].source;
    //}
    // if (initial_left_state) {
    //   newleft.src = images[currentimageindex].source;
    // initial_left_state = false;
    //initial_right_state = true;
    //}
    var allindbuttons = document.querySelectorAll(".carousel_index");
    for (var i = 0; i < allindbuttons.length; i++) {
        if (allindbuttons[i].classList.contains("active_index")) {
            allindbuttons[i].classList.remove("active_index");
        }
    }
    allindbuttons[currentimageindex].classList.add("active_index");
    imgdiv.appendChild(newleft);
    //alert(currentimageindex);
    //imageright.classList.remove("right_image");
    //imageright.classList.add("left_image");
    //imageright.src = images[currentimageindex - 1];
}
function render_carousel() {
    var el = document.getElementById("carousel_section");
    ReactDOM.render(React.createElement(Fullcarousel, null), el);
    setTimeout(function () {
        init_state();
    }, 50);
}
export { Carousel, transition_to_right, transition_to_left, render_carousel, images };