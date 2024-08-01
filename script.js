document.addEventListener('DOMContentLoaded', () => {
    const viewCountElement = document.getElementById('view-count');
    const reloadButton = document.getElementById('reload-btn');
  
    let viewCount = parseInt(localStorage.getItem('viewCount')) || 0;
    viewCount += 1;
    localStorage.setItem('viewCount', viewCount);
    viewCountElement.textContent = viewCount;
  
    function getPastelColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const pastel = `rgba(${r}, ${g}, ${b}, 0.5)`;
      return pastel;
    }
  
    document.body.style.backgroundColor = getPastelColor();
  
    reloadButton.addEventListener('click', () => {
      window.location.reload();
    });
  });