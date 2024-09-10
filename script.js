document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const uploadStatus = document.getElementById('uploadStatus');
    const detectButton = document.getElementById('detectButton');
    const detectionStatus = document.getElementById('detectionStatus');
    const result = document.getElementById('result');

    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault();
    
        if (fileInput.files.length === 0) {
            alert('Please select a file to upload.');
            return;
        }
    
        // Show upload animation
        uploadStatus.classList.remove('hidden');
    
        // Simulate upload delay
        setTimeout(() => {
            uploadStatus.classList.add('hidden');
            detectButton.style.display = 'inline-block';
    
            // Print the upload completion message
            const uploadCompleteMessage = document.createElement('div');
            uploadCompleteMessage.textContent = 'Upload complete! Click "Detect" to proceed.';
            uploadCompleteMessage.style.color = '#27ae60'; // Green color
            uploadCompleteMessage.style.marginTop = '10px';
            uploadForm.appendChild(uploadCompleteMessage);
        }, 2000); // Simulate a 2-second upload
    });

    detectButton.addEventListener('click', function () {
        // Show detection animation
        detectionStatus.classList.remove('hidden');
        detectButton.style.display = 'none';

        // Simulate random detection delay (between 5 and 10 seconds)
        const detectionTime = Math.floor(Math.random() * 5000) + 5000;

        setTimeout(() => {
            detectionStatus.classList.add('hidden');
            result.classList.remove('hidden');

            // Determine the file type (image or video)
            const fileType = fileInput.files[0].type;
            let resultMessage = '';

            if (fileType.startsWith('video/')) {
                resultMessage = 'This video is fake.';
            } else if (fileType.startsWith('image/')) {
                resultMessage = 'This image is fake.';
            } else {
                resultMessage = 'Unknown file type.';
            }

            // Display the detection result
            result.textContent = resultMessage;

            // Generate a random accuracy percentage between 50% and 70%
            const accuracy = Math.floor(Math.random() * 21) + 50; // 50 to 70%

            // Create and display the accuracy message
            const accuracyMessage = document.createElement('h2');
            accuracyMessage.textContent = `Accuracy of the result is ${accuracy}%.`;
            accuracyMessage.style.color = '#2980b9'; // Blue color
            accuracyMessage.style.marginTop = '10px';
            result.appendChild(accuracyMessage);

        }, detectionTime); // Simulate a detection delay
    });
});

