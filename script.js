const services = [
  {name:'आकर्षण हवन',cat:'sambandh',icon:'✺',desc:'व्यक्तित्व, सहयोग, अवसर और सामाजिक प्रतिष्ठा के लिए।',benefits:['व्यक्तित्व में आकर्षण बढ़ता है।','लोगों का सहयोग एवं सम्मान प्राप्त होता है।','व्यापार और करियर में नए अवसर मिल सकते हैं।','सामाजिक प्रतिष्ठा में वृद्धि होती है।']},
  {name:'वशीकरण हवन',cat:'sambandh',icon:'❋',desc:'रिश्तों में मधुरता, प्रेम और अनुकूलता की कामना के लिए।',benefits:['रिश्तों में मधुरता आती है।','पति-पत्नी एवं परिवार में प्रेम बढ़ता है।','मनमुटाव और दूरी कम करने में सहायक माना जाता है।','लोगों का सहयोग एवं अनुकूलता प्राप्त होती है।']},
  {name:'सम्मोहन हवन',cat:'sambandh',icon:'◉',desc:'वाणी के प्रभाव, आत्मविश्वास और नेतृत्व क्षमता के लिए।',benefits:['वाणी में प्रभाव आता है।','आत्मविश्वास बढ़ता है।','नेतृत्व क्षमता विकसित होती है।','लोगों पर सकारात्मक प्रभाव पड़ता है।']},
  {name:'उच्चाटन हवन',cat:'raksha',icon:'△',desc:'नकारात्मक व्यक्तियों, भय और बाधाओं से राहत की कामना।',benefits:['नकारात्मक व्यक्तियों से दूरी बनने में सहायक।','शत्रु द्वारा उत्पन्न बाधाओं से राहत।','मानसिक तनाव और भय में कमी।','जीवन में शांति एवं स्थिरता।']},
  {name:'विद्वेषण हवन',cat:'raksha',icon:'◇',desc:'हानिकारक गठबंधन से रक्षा और स्वयं के हितों की सुरक्षा के लिए।',benefits:['हानिकारक या अन्यायपूर्ण गठबंधन को समाप्त करने हेतु किया जाता है।','शत्रुओं की एकता को कमजोर करने की पारंपरिक मान्यता।','स्वयं की सुरक्षा एवं हितों की रक्षा।']},
  {name:'जप अनुष्ठान',cat:'paramarsh',icon:'ॐ',desc:'ब्राह्मणों द्वारा मनोकामना, ग्रह शांति और आध्यात्मिक उन्नति हेतु।',benefits:['मनोकामना पूर्ति।','ग्रह दोष शांति।','आध्यात्मिक उन्नति।','मानसिक शांति एवं सकारात्मक ऊर्जा।','ईश्वर की कृपा प्राप्ति।']},
  {name:'ब्रह्मास्त्र हवन',cat:'raksha',icon:'▲',desc:'अत्यंत कठिन, तांत्रिक और शत्रु बाधाओं से रक्षा हेतु विशेष हवन।',benefits:['अत्यंत कठिन बाधाओं की शांति हेतु।','तांत्रिक बाधाओं से रक्षा।','शत्रु भय से मुक्ति।','आध्यात्मिक सुरक्षा एवं साहस।'],brahmastra:true},
  {name:'लघु ब्रह्मास्त्र हवन',cat:'raksha',icon:'△',desc:'सामान्य तांत्रिक, नकारात्मक बाधाओं और स्थान की रक्षा हेतु।',benefits:['सामान्य तांत्रिक एवं नकारात्मक बाधाओं की शांति।','घर एवं व्यवसाय की रक्षा।','सकारात्मक ऊर्जा का संचार।'],brahmastra:true},
  {name:'लक्ष्मी प्राप्ति हवन',cat:'samriddhi',icon:'✦',desc:'धन, व्यापार, समृद्धि और आर्थिक राहत की कामना के लिए।',benefits:['धन एवं समृद्धि की प्राप्ति।','व्यापार में उन्नति।','आर्थिक संकट में राहत।','घर में सुख-समृद्धि और वैभव।']},
  {name:'तंत्र बाधा निवारण हवन',cat:'raksha',icon:'✧',desc:'नकारात्मक ऊर्जा, भय और तांत्रिक बाधाओं की शांति के लिए।',benefits:['तांत्रिक बाधाओं की शांति।','नकारात्मक ऊर्जा से रक्षा।','भय एवं मानसिक अशांति में कमी।','आध्यात्मिक सुरक्षा।']},
  {name:'कोर्ट केस हवन',cat:'raksha',icon:'⚖',desc:'न्यायिक मामलों में सफलता और मानसिक शांति की प्रार्थना।',benefits:['न्यायिक मामलों में सफलता की प्रार्थना।','कानूनी बाधाओं में राहत।','निर्णय अनुकूल होने की कामना।','मानसिक तनाव में कमी।']},
  {name:'शत्रु बाधा हवन',cat:'raksha',icon:'◆',desc:'विरोधी बाधाओं से सुरक्षा, साहस और आत्मबल के लिए।',benefits:['शत्रुओं से सुरक्षा।','विरोधियों की बाधाओं में कमी।','साहस एवं आत्मबल में वृद्धि।','कार्यों में सफलता।']},
  {name:'राजनीति में विजय प्राप्ति हवन',cat:'samriddhi',icon:'☀',desc:'जनसमर्थन, नेतृत्व, सम्मान और सफलता की कामना के लिए।',benefits:['जनसमर्थन प्राप्त होने की प्रार्थना।','नेतृत्व क्षमता में वृद्धि।','चुनाव एवं सार्वजनिक जीवन में सफलता की कामना।','सम्मान एवं प्रतिष्ठा में वृद्धि।']},
  {name:'विशेष परामर्श हवन',cat:'paramarsh',icon:'✤',desc:'व्यक्ति की समस्या और संकल्प के अनुसार विशेष मार्गदर्शन।',benefits:['व्यक्ति की समस्या के अनुसार विशेष संकल्प लेकर हवन किया जाता है।','करियर, व्यवसाय, शिक्षा, विवाह, स्वास्थ्य या पारिवारिक समस्याओं के लिए मार्गदर्शन एवं अनुष्ठान।','ग्रह दोष एवं जीवन की बाधाओं के अनुसार उपयुक्त उपाय किए जाते हैं।','मनोकामना पूर्ति एवं जीवन में सकारात्मक परिवर्तन की कामना।']},
  {name:'शीघ्र विवाह हवन',cat:'sambandh',icon:'❀',desc:'विवाह की बाधा, शुभ योग और पारिवारिक सहमति की कामना के लिए।',benefits:['विवाह में आने वाली बाधाओं की शांति।','योग्य जीवनसाथी प्राप्ति की प्रार्थना।','विवाह योग को प्रबल करने की पारंपरिक मान्यता।','मांगलिक एवं अन्य वैवाहिक दोषों की शांति हेतु सहायक।','पारिवारिक सहमति एवं शुभ विवाह के मार्ग में आने वाली रुकावटें दूर होने की कामना।','वैवाहिक जीवन में सुख, प्रेम एवं सामंजस्य की प्रार्थना।']}
];

const serviceImages=[
  'WhatsApp Image 2026-08-17 at 23.12.54 (2).jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.44 (1).jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.55 (1).jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.55.jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.54 (1).jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.53 (3).jpeg',
  'WhatsApp Image 2026-08-17 at 23.13.00.jpeg',
  'WhatsApp Image 2026-08-17 at 23.13.01.jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.58.jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.46.jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.45.jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.53 (1).jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.44.jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.53 (3).jpeg',
  'WhatsApp Image 2026-08-17 at 23.12.43.jpeg'
];

/* ---------- Shared helpers ---------- */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add('js');
const WA_NUMBER='919183439584';
const waUrl=m=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(m)}`;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const run=(f)=>{try{f()}catch(e){console.warn(e)}};

run(()=>$$('.wa-link').forEach(a=>{a.href=waUrl(a.dataset.message);a.target='_blank';a.rel='noopener'}));

/* ---------- Mobile menu ---------- */
run(()=>{const t=$('.menu-toggle'),n=$('#site-nav');if(!t||!n)return;
 const set=o=>{n.classList.toggle('open',o);t.setAttribute('aria-expanded',String(o))};
 t.addEventListener('click',()=>set(!n.classList.contains('open')));
 $$('a',n).forEach(a=>a.addEventListener('click',()=>set(false)));
 addEventListener('keydown',e=>{if(e.key==='Escape')set(false);
  if(e.key==='Tab'&&n.classList.contains('open')){const f=[t,...$$('a',n)],i=f.indexOf(document.activeElement);
   if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}});
 addEventListener('resize',()=>{if(innerWidth>900)set(false)})});

/* ---------- Reveal on scroll ---------- */
run(()=>{const els=$$('.reveal');if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('is-visible'));return}
 const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-visible');io.unobserve(en.target)}}),{threshold:.12});
 els.forEach((e,i)=>{e.style.transitionDelay=Math.min(i%6*60,240)+'ms';io.observe(e)})});

/* ---------- 3D tilt (fine pointers only) ---------- */
run(()=>{if(!fine||calm)return;$$('.tilt').forEach(el=>{let r=0;
 el.addEventListener('pointermove',e=>{if(r)return;r=requestAnimationFrame(()=>{r=0;const b=el.getBoundingClientRect(),x=(e.clientX-b.left)/b.width,y=(e.clientY-b.top)/b.height;
  el.style.transform=`perspective(900px) rotateX(${(.5-y)*16}deg) rotateY(${(x-.5)*16}deg)`;el.style.setProperty('--gx',x*100+'%');el.style.setProperty('--gy',y*100+'%');el.classList.add('on')})});
 el.addEventListener('pointerleave',()=>{el.style.transform='';el.classList.remove('on')})})});

/* ---------- Hero pointer parallax (lerp) ---------- */
run(()=>{const s=$('.scene');if(!s||!fine||calm)return;let tx=0,ty=0,cx=0,cy=0,on=false;
 const m=$('.mandala',s),a=$('.arch',s);
 s.addEventListener('pointermove',e=>{const b=s.getBoundingClientRect();tx=((e.clientX-b.left)/b.width-.5)*12;ty=((e.clientY-b.top)/b.height-.5)*-12});
 const loop=()=>{cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;s.style.transform=`rotateY(${cx}deg) rotateX(${cy}deg)`;if(on)requestAnimationFrame(loop)};
 new IntersectionObserver(([e])=>{on=e.isIntersecting;if(on)loop()}).observe(s)});

/* ---------- Header, back-to-top, year ---------- */
run(()=>{const t=$('.top');addEventListener('scroll',()=>{t&&t.classList.toggle('show',scrollY>600)},{passive:true});t&&t.addEventListener('click',()=>scrollTo({top:0}))});
run(()=>$$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear()));

/* ---------- Service dialog (delegated) ---------- */
const rates='<div class="rates"><div class="rate"><small>साधारण</small><b>₹2,500</b></div><div class="rate"><small>विशेष</small><b>₹5,100</b></div><div class="rate"><small>महाविशेष</small><b>₹11,000</b></div></div>';
const brahmastraRates='<div class="rates"><div class="rate"><small>विशेष</small><b>₹11,000</b></div><div class="rate"><small>महाविशेष</small><b>₹21,000</b></div></div>';
run(()=>{const d=$('#service-dialog');if(!d)return;let opener=null;
 document.addEventListener('click',e=>{const b=e.target.closest('[data-service]');if(!b)return;opener=b;const s=services[+b.dataset.service];
  $('#dialog-content').innerHTML=`<div class="di"><p class="kicker">शास्त्रोक्त हवन सेवा</p><h2 id="dialog-title">${s.name}</h2><p>${s.desc}</p><h3>परंपरागत रूप से माने जाने वाले लाभ</h3><ul class="benefits">${s.benefits.map(x=>`<li>${x}</li>`).join('')}</ul><h3>दक्षिणा</h3>${s.brahmastra?brahmastraRates:rates}<a class="btn gold" target="_blank" rel="noopener" href="${waUrl(`नमस्ते आचार्य जी, मुझे ${s.name} के बारे में जानकारी और बुकिंग करनी है।`)}">WhatsApp पर परामर्श लें ↗</a></div>`;
  d.showModal?d.showModal():d.setAttribute('open','');document.body.classList.add('no-scroll')});
 $('.dialog-close',d).addEventListener('click',()=>d.close());
 d.addEventListener('click',e=>{if(e.target===d)d.close()});
 d.addEventListener('close',()=>{document.body.classList.remove('no-scroll');opener&&opener.focus()})});

/* ---------- Services filters (static cards enhanced) ---------- */
run(()=>{const f=$('.filters');if(!f)return;const cards=$$('#services-grid .card'),live=$('#count');
 f.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  $$('button',f).forEach(x=>x.setAttribute('aria-pressed',String(x===b)));let n=0;
  cards.forEach((c,i)=>{const show=b.dataset.filter==='all'||c.dataset.cat===b.dataset.filter;if(show)n++;
   setTimeout(()=>{c.hidden=!show;if(show){c.classList.remove('in');void c.offsetWidth;c.classList.add('in')}},i*15)});
  live.textContent=n?`${n} सेवाएँ दिखाई जा रही हैं`:'इस श्रेणी में कोई सेवा उपलब्ध नहीं।'})});

/* ---------- Counters ---------- */
run(()=>$$('[data-count]').forEach(el=>{const end=+el.dataset.count;if(calm||!('IntersectionObserver' in window))return;
 const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();let n=0;const t=setInterval(()=>{n++;el.textContent=n;if(n>=end)clearInterval(t)},end>9?60:150)});io.observe(el)}));

/* ---------- Contact form ---------- */
run(()=>{const f=$('#booking-form');if(!f)return;const sel=$('#hawan');
 [...services.map(s=>s.name),'निश्चित नहीं हूँ, परामर्श चाहिए'].forEach(n=>sel.add(new Option(n,n)));
 const note=$('#note'),cnt=$('#cnt');note.addEventListener('input',()=>cnt.textContent=note.value.length+'/300');
 f.addEventListener('submit',e=>{e.preventDefault();let bad=null;
  [['name','कृपया अपना नाम लिखें।'],['city','कृपया अपने शहर का नाम लिखें।'],['hawan','कृपया हवन चुनें।']].forEach(([id,m])=>{const el=$('#'+id),ok=el.value.trim();
   el.setAttribute('aria-invalid',String(!ok));$('#e-'+id).textContent=ok?'':m;if(!ok&&!bad)bad=el});
  if(bad){bad.focus();return}
  let msg=`नमस्ते आचार्य जी, मेरा नाम ${$('#name').value.trim()} है। मैं ${$('#city').value.trim()} से हूँ। मुझे ${sel.value} के संबंध में जानकारी और बुकिंग करनी है।`;
  if(note.value.trim())msg+=`\nमेरी समस्या/संकल्प: ${note.value.trim()}`;
  window.open(waUrl(msg),'_blank','noopener')})});

/* ---------- Copy message ---------- */
run(()=>{const b=$('#copy-btn');if(!b)return;b.addEventListener('click',async()=>{const t=$('#sample').textContent.trim();
 try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement('textarea');a.value=t;document.body.append(a);a.select();document.execCommand('copy');a.remove()}
 const o=b.textContent;b.textContent='कॉपी हो गया ✓';setTimeout(()=>b.textContent=o,2000)})});
