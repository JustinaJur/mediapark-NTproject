const numItemsToGenerate = 6;
const numImagesAvailable = 242;
const imageWidth = 400;
const imageHeight = 400;
const collectionID = 1163637;
renderGalleryItem = randomNumber => {
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
        .then((response) => {
            let galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
      <img src="${response.url}" alt="gallery image"/>
    `
            document.querySelector(".news-API").appendChild(galleryItem);
        })
}


(fetchImages = () => {
    for (let i = 0; i < numItemsToGenerate; i++) {
        let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
        renderGalleryItem(randomImageIndex);
    }
})()


validateForm = () => {
    let emailInput = document.requestForm.email.value;
    let re = /\S+@\S+\.\S+/;
    if (!re.test(emailInput)) {
        alert("KLAIDA! El.paštas turi atitkti 'xxx@xxx.xxx' formatą");
        return false;
    }
}



filterTable = e => {
    let value = e.value;
    let tr = document.getElementById("table").getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        if (tr[i].innerHTML.indexOf(value) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}



let data = ["images/tu.png", "images/kiril.png", "images/jason.png"];

var changeImage = changeImage = () => {
    let imagesOfGallery = Array.from(document.querySelector(".main").querySelectorAll("img"));
    let dataSpliced = data.splice(0, 1);
    data = data.concat(dataSpliced);
    for (let i = 0; i < imagesOfGallery.length; i++) {
        imagesOfGallery[i].src = data[data.length - 1 - i];

    }
}





