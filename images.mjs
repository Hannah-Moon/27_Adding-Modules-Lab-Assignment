
//getimages
export async function fetchImages() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      const imageContainer = document.getElementById("imageContainer");
      data.slice(0, 4).forEach(photo => { // Slice the data to get only the first 4 photos
        const image = document.createElement("img");
        image.src = photo.url;
        image.alt = photo.title;
        image.style.width = "150px"; // Set width of thumbnail
        image.style.height = "150px"; // Set height of thumbnail
        image.style.marginRight = "10px"; // Set margin between images
        image.style.marginBottom = "5px"; // Set margin between images
        imageContainer.appendChild(image);
      });
    } catch (error) {
      console.error(error);
    }
  }

  fetchImages();