// ============================================
// Dark Theme Interactive Features
// ============================================

console.log("🎮 NiktoBlox Website Loaded");

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 導航欄活動狀態
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.8)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
  }
});

// 按鈕點擊反應
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

console.log("✅ All interactive features loaded");
