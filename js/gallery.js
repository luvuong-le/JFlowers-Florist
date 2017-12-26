let ImageGallery = {
    activeIndex: 0,
    currentPhotoUrls: [],
    allImagesArray: [],

    e: {
        /* The modal */
        modal: document.getElementById("gallery-modal"),

        /* Image Element to be Replaced */
        modalImg: document.getElementById("gallery-img"),

        modalContent: document.getElementById("modal-content"),

        /* Directional Buttons */
        left: document.getElementById("leftDir"),
        right: document.getElementById("rightDir"),

        /* Close Button */
        close: document.getElementById("close"),

        caption: document.getElementById("caption"),
    },
};

ImageGallery.evtCallbacks = {
    clicked: function(e) {
        /* Set Current Photo Urls to All Photos */

        ImageGallery.allImagesArray = Array.from(document.getElementsByClassName('gallery-img'));

        ImageGallery.currentPhotoUrls = ImageGallery.allImagesArray.map((img) => {
            return img.getAttribute("src");
        });

        /* Set the Active index to the element equal to the photo array */
        ImageGallery.activeIndex = ImageGallery.allImagesArray.indexOf(e.target);

        /* Set the Modal to show in display */
        ImageGallery.e.modal.style.display = "block";

        /* Set the caption for the image */
        ImageGallery.e.caption.innerHTML = e.target.getAttribute("alt");

        /* Set the modal SRC */
        ImageGallery.e.modalImg.src = e.target.getAttribute("src");
    },

    close: function() {
        ImageGallery.e.modal.style.display = "none";
    },


    previousImage: function () {
        if (ImageGallery.activeIndex - 1 < 0) {
            ImageGallery.activeIndex = ImageGallery.currentPhotoUrls.length - 1;
            return ImageGallery.update();
        }
        
        ImageGallery.e.modal.style.display = "none";
        ImageGallery.activeIndex--;
        ImageGallery.update();
    },

    nextImage: function () {
        if (ImageGallery.activeIndex + 1 >= ImageGallery.currentPhotoUrls.length) {
            ImageGallery.activeIndex = 0;
            return ImageGallery.update();
        }

        ImageGallery.activeIndex++;
        ImageGallery.e.modal.style.display = "none";
        
        ImageGallery.update();
    }
};


ImageGallery.update = () => {
    setTimeout(function() {
        ImageGallery.e.modal.style.display = "block";
    }, 10);
    
    ImageGallery.e.modalImg.setAttribute("src", ImageGallery.currentPhotoUrls[ImageGallery.activeIndex]);
    ImageGallery.e.caption.innerHTML = ImageGallery.allImagesArray[ImageGallery.activeIndex].getAttribute("alt");
    
};

ImageGallery.addListeners = () => {
    let images = document.getElementsByClassName('gallery-img');

    for (let img of images) {
        img.addEventListener("click", ImageGallery.evtCallbacks.clicked);
    }

    ImageGallery.e.left.addEventListener("click", ImageGallery.evtCallbacks.previousImage.bind(ImageGallery));
    ImageGallery.e.right.addEventListener("click", ImageGallery.evtCallbacks.nextImage.bind(ImageGallery));

    ImageGallery.e.close.addEventListener("click", () => {
        ImageGallery.evtCallbacks.close();
    });

    window.addEventListener("click", (e) => {
        if (e.target === ImageGallery.e.modal) {
            ImageGallery.e.modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (keyevent) {
        const EXIT_KEY = 27, LEFT_KEY = 37, RIGHT_KEY = 39;

        switch (keyevent.keyCode) {
            case EXIT_KEY:
                this.e.modal.style.display = "none";
                break;
            case LEFT_KEY:
                this.evtCallbacks.previousImage.bind(ImageGallery)();
                break;
            case RIGHT_KEY:
                this.evtCallbacks.nextImage.bind(ImageGallery)();
                break;
        }
    }.bind(ImageGallery));
};

ImageGallery.init = function () {
    this.addListeners();
};

ImageGallery.init();
