
//getimages
export async function fetchImages() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      const imageContainer = document.getElementById("imageContainer");
      data.slice(0, 24).forEach(photo => { // Slice the data to get only the first 4 photos
        const image = document.createElement("img");
        image.src = photo.url;
        image.alt = photo.title;
        imageContainer.appendChild(image);
      });
    } catch (error) {
      console.error(error);
    }
  }

  fetchImages();