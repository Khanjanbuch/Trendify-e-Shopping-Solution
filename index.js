// Array of image sources for each category
const images = {
    manFashion: ["images/manFashion.jpg", "images/manFashion2.jpg", "images/manFashion3.jpg" , "images/manFashion4.jpg"],
    WomanFashion: ["images/femaleFashion.png", "images/femaleFashion2.png"], 
    sunglasses: ["images/Sunglasses.png", "images/Sunglasses2.png"],
    Footwears: ["images/shoes.jpg", "images/shoes2.jpg" ],
    Watches: ["images/watches.jpg" ]

};

// Function to change images at intervals
function startSlideshow() {
    let index = 1; // Track the current image index
   

    setInterval(() => {
        // Update each image element with a new image from the array
        document.querySelector(".manFashion").src = images.manFashion[index];
        document.querySelector(".WomanFashion").src = images.WomanFashion[index];
        document.querySelector(".sunglasses").src = images.sunglasses[index];

        document.querySelector(".Footwears").src = images.Footwears[index];

        // Increment the index (reset if it reaches the end)
        index = (index + 1) % images.manFashion.length;
    }, 3000); // Change images every 3 seconds
}

// Run slideshow when the page loads
window.onload = startSlideshow;
