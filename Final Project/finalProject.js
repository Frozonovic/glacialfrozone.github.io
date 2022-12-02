let requestURL = 'https://api.unsplash.com/search/photos/?query=cat&client_id=xNRJ4I87-boHTz2_nR4CLHnP5ew1WPr5odvl8qxewxE';
let getImagesButton = document.querySelector('#getImage');
let imageToDisplay = document.querySelector('#displayImage');
let header = document.querySelector('#imageLabel')

getImagesButton.addEventListener('click', async () => {
    let randomImage = await getNewImage();
    imageToDisplay.innerHTML = `<img src="${randomImage}" alt="newImage">`;
    header.innerHTML = "Sike. You only get cats (come back later though, I will edit it so you can generate custom images)."
});


async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 11);
    return fetch(requestURL)
        .then((response) => response.json())
        .then((data) => {
            let allImages = data.results[randomNumber];
            return allImages.urls.regular;
        })
}