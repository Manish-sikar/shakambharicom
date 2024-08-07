// document.getElementById('fileInput').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             document.getElementById('imagePreview').innerHTML = '';
//             document.getElementById('imagePreview').appendChild(img);
//         }
//         reader.readAsDataURL(file);
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    
    // Function to display the image and upload time
    function displayImageAndTime(imageSrc, uploadTime) {
        imagePreview.innerHTML = '';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        
        const timeLabel = document.createElement('p');
        timeLabel.textContent = `Uploaded at: ${uploadTime}`;
        timeLabel.style.marginTop = '10px';
        timeLabel.style.color = 'white';
        
        imagePreview.appendChild(img);
        imagePreview.appendChild(timeLabel);
    }

    // Load saved image and time from local storage
    const savedImage = localStorage.getItem('uploadedImage');
    const savedTime = localStorage.getItem('uploadTime');
    if (savedImage && savedTime) {
        displayImageAndTime(savedImage, savedTime);
    }

    // Event listener for file input change
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageSrc = e.target.result;
                const uploadTime = new Date().toLocaleString();

                // Save image and time to local storage
                localStorage.setItem('uploadedImage', imageSrc);
                localStorage.setItem('uploadTime', uploadTime);

                // Display the image and upload time
                displayImageAndTime(imageSrc, uploadTime);
            }
            reader.readAsDataURL(file);
        }
    });
});
