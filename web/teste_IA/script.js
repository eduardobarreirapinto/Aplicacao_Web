document.getElementById('imageInput').addEventListener('change', async function(event) {
    const image = event.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    document.getElementById('imagePreview').src = imageUrl;
  
    const model = await mobilenet.load();
    const imgElement = document.getElementById('imagePreview');
    const predictions = await model.classify(imgElement);
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
    predictions.forEach(prediction => {
      resultElement.innerHTML += `<div>${prediction.className}: ${Math.round(prediction.probability * 100)}%</div>`;
    });
  });
  