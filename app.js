document.getElementById('year').textContent = new Date().getFullYear();
['consultationForm','cruiseForm','hotelForm'].forEach(id=>{
  const f=document.getElementById(id);
  if(!f) return;
  f.addEventListener('submit',e=>{
    e.preventDefault();
    alert(id+' submitted (replace with real backend).');
  });
});