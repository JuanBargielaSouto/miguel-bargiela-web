const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.navigation');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('#year').forEach(y => y.textContent = new Date().getFullYear());

// Concert calendar: edit events.js only. No server required.
const eventHolder = document.getElementById('calendar-list');
const eventTabs = document.querySelectorAll('[data-filter]');
const niceDate = (date) => { const [y,m,d]=date.split('-').map(Number); return new Date(y,m-1,d); };
const today = new Date(); today.setHours(0,0,0,0);
function displayEvents(filter) {
  if (!eventHolder) return;
  eventHolder.replaceChildren();
  const selected = (typeof EVENTS !== 'undefined' ? EVENTS : []).filter(e => /^\d{4}-\d{2}-\d{2}$/.test(e.date) && (filter === 'upcoming' ? niceDate(e.date)>=today : niceDate(e.date)<today)).sort((a,b)=>filter==='upcoming' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  if (!selected.length) { const p=document.createElement('p'); p.className='calendar-empty'; p.textContent=filter==='upcoming' ? 'New concert dates coming soon. Check back for updates.' : 'Past performances will appear here.'; eventHolder.append(p); return; }
  selected.forEach(e=>{const row=document.createElement('article'); row.className='event-row'; const dt=niceDate(e.date);
    const day=document.createElement('div');day.className='event-date';day.textContent=dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase();
    const info=document.createElement('div');info.className='event-info';const h=document.createElement('h3');h.textContent=e.title || 'Performance'; const p=document.createElement('p');p.textContent=[e.venue,e.city,e.time].filter(Boolean).join(' · ');info.append(h,p);row.append(day,info);
    if(e.url && /^https?:\/\//.test(e.url)){const a=document.createElement('a');a.className='event-link';a.href=e.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='DETAILS ↗';row.append(a);}eventHolder.append(row);});
}
eventTabs.forEach(b=>b.addEventListener('click',()=>{ eventTabs.forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false');});b.classList.add('active');b.setAttribute('aria-pressed','true');displayEvents(b.dataset.filter); }));
if (eventHolder) {
  if (typeof PUBLIC_CONCERT_CALENDAR_ID !== 'undefined' && PUBLIC_CONCERT_CALENDAR_ID.trim()) {
    const iframe=document.getElementById('calendar-iframe');
    iframe.src='https://calendar.google.com/calendar/embed?src='+encodeURIComponent(PUBLIC_CONCERT_CALENDAR_ID.trim())+'&ctz=Europe%2FVienna&mode=AGENDA';
    document.getElementById('calendar-live').hidden=false;
    document.querySelector('.calendar-controls').hidden=true;
    eventHolder.hidden=true;
  } else displayEvents('upcoming');
}

