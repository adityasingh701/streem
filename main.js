// नाम popup + personalization
function showModal() {
  document.getElementById('nameModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function submitName() {
  const name = document.getElementById('userName').value.trim();
  if (!name) {
    alert('कृपया अपना नाम डालें।');
    return;
  }
  localStorage.setItem('username', name);
  document.getElementById('nameModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  displayName();
}
function displayName() {
  const name = localStorage.getItem('username');
  if (name) {
    document.getElementById('nameButton').textContent = name;
    document.getElementById('nameButton').style.display = 'block';
    document.querySelectorAll('.user-name').forEach(el => {
      el.textContent = name;
    });
  } else {
    showModal();
  }
}
// Popunder onclick trigger (reuse for all buttons with class 'pop-btn')
function attachPopunder() {
  document.querySelectorAll('.pop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = document.createElement('script');
      s.src = 'YOUR_POPUNDER_SCRIPT.js'; // ← यहाँ आपका Popunder script URL पेस्ट करें
      document.body.appendChild(s);
    });
  });
}


// DOM loaded
window.addEventListener('DOMContentLoaded', () => {
  displayName();
  attachPopunder();
});

