// ─── DATA ─────────────────────────────────────────────────────────────────────
const chapters = [
  {
    id:0, icon:"🌱", title:"Who We Are", sub:"Mission, values & what makes us unique",
    doc: {
      highlight: `Open Hub exists to <strong>bring visibility to non-monogamy</strong> and other relationship styles that refuse to fit inside a single box. Not because they are trendy but because they are real. We create space for anyone: curious, cautious, experienced, or just beginning. Your gender, orientation, past none of these are barriers here.`,
      sections: [
        {
          title:"🎯 Our Mission",
          items:[
            {strong:"Who we're for",text:"Anyone who practices or is curious about non-monogamy, seeks community or support, believes in consent and curiosity, or wants to question what society taught us about love."},
            {strong:"What we do",text:"We host warm, thoughtful events; provide resources for ethical non-monogamy; run circles where people can be honest about their lives; and partner with movements that want a kinder world."},
          ]
        },
        {
          title:"💠 Our 7 Core Values",
          items:[
            {strong:"💛 Inclusive",text:"Inclusion is the ground we stand on, not a finish line. If you're here, you belong."},
            {strong:"🤝 Monogamy-Friendly",text:"We believe in your right to choose. Monogamous people and allies are always welcome. Non-monogamy isn't a moral upgrade, just another valid path."},
            {strong:"🌍 Movement-Minded",text:"Non-monogamy is woven into social justice, LGBTQIA+ rights, racial equity, sex-positivity and more."},
            {strong:"🧬 Intersectional",text:"People are constellations. We honour overlapping identities and know that marginalisation compounds."},
            {strong:"🛑 Anti-Oppression",text:"Sexual freedom is linked to every freedom. We fight against racism, patriarchy, classism and ableism."},
            {strong:"🛠️ Impact-Oriented",text:"Every action is meant to ripple outward, changing how we love, represent ourselves, and reshape culture."},
            {strong:"🎓 Culturally Humble",text:"We are always learning. We name privilege, walk in others' footsteps, and strive for accountability over perfection."},
          ]
        }
      ]
    },
    label:"Chapter 1 · Who We Are",
    qs:[
      {q:"What is Open Hub's primary purpose?",o:["A dating app for non-monogamous people","A community bringing visibility to non-monogamy and diverse relationship styles","An event company that rents venues in Lisbon","A therapy network for relationship issues"],c:1,f:"Open Hub exists to bring visibility to non-monogamy and other relationship styles, creating space for anyone curious, cautious, or experienced."},
      {q:"Which of these is NOT one of Open Hub's 7 core values?",o:["Intersectional","Anti-Oppression","Competitive","Inclusive"],c:2,f:"The 7 values are: Inclusive, Monogamy-Friendly, Movement-Minded, Intersectional, Anti-Oppression, Impact-Oriented, and Culturally Humble. Competitive isn't one of them!"},
      {q:"Open Hub is only for people who already practice non-monogamy.",o:["True, it's a space just for non-monogamous folks","False, it's also for people who are simply curious","True, newcomers need an intro course first","False, but monogamous people must eventually convert"],c:1,f:"Open Hub welcomes anyone who practices or is simply curious about non-monogamy, regardless of where they are on their journey."},
      {q:"What does 'Monogamy-Friendly' mean as an Open Hub value?",o:["Everyone must eventually become non-monogamous","Non-monogamy is morally superior to monogamy","Monogamous people and allies are welcome, it's about the right to choose","Monogamous people can only attend as guests"],c:2,f:"Monogamy-Friendly means Open Hub believes in your right to choose. Non-monogamy isn't a moral upgrade , just another valid path through the woods."},
      {q:"Open Hub sees non-monogamy as connected to which broader themes?",o:["Only personal relationships and dating","Social justice, LGBTQIA+ rights, racial equity and sex-positivity","Business networking and personal finance","Sports and physical wellness"],c:1,f:"Open Hub is Movement-Minded , non-monogamy is woven into social justice, touching racial equity, LGBTQIA+ rights, and more."}
    ]
  },
  {
    id:1, icon:"✨", title:"Our Spaces & Events", sub:"Every group and gathering we host",
    doc: {
      highlight: `Every month we open our doors to anyone , regardless of gender identity, orientation, or where you are in your journey. Our gatherings are more than events , they're <strong>experiments in belonging</strong>, classrooms of empathy, living proof that connection doesn't require conformity.`,
      sections: [
        {
          title:"📅 Regular Gatherings",
          items:[
            {strong:"🌙 PolyNight",text:"Our flagship event! A monthly social gathering open to the entire community , newcomers and regulars alike."},
            {strong:"💬 Discussion Group",text:"Facilitated conversations on topics related to non-monogamy , educational and thought-provoking."},
            {strong:"🤗 Support Group",text:"A sharing circle to open up about lived experiences in non-monogamy, in a safe and supported space."},
            {strong:"🎲 Boardgame Night",text:"Fun, inclusive board game nights , perfect for newcomers who want a lighter entry point."},
            {strong:"📚 Book Club",text:"Reading & discussion exploring themes around relationships, identity, gender, and love."},
            {strong:"🏛️ Town Hall",text:"Our decision-making & transparency event where the whole community shapes Open Hub's direction together."},
          ]
        },
        {
          title:"👥 Identity-Specific Circles",
          items:[
            {strong:"FLINTA*",text:"Sharing circle for: Women, Lesbians, Intersex, Non-binary, Trans and Agender folks. A safe space for these identities."},
            {strong:"MAGIC",text:"Sharing circle for: Male-identifying, Agender, Gender-fluid, Intersex, and Cis-men people."},
            {strong:"👨‍👩‍👧 Families Group",text:"For people in non-monogamous family dynamics: mutual support, sharing and organising meetups with kids."},
          ]
        }
      ]
    },
    label:"Chapter 2 · Spaces & Events",
    qs:[
      {q:"What is PolyNight?",o:["A closed support group for polyamorous couples only","A monthly social gathering open to the whole community","A weekly online meeting for volunteers","An annual fundraising gala"],c:1,f:"PolyNight is Open Hub's monthly social gathering , open to everyone in the community. It's the flagship event!"},
      {q:"The FLINTA circle is specifically for which people?",o:["All volunteers regardless of gender","Male-identifying and cis-men only","Women, lesbians, intersex, non-binary, trans and agender folks","People new to non-monogamy"],c:2,f:"FLINTA = Women, Lesbians, Intersex, Non-binary, Trans and Agender folks. It's a dedicated circle for these identities."},
      {q:"What does MAGIC stand for at Open Hub?",o:["Mindful, Active, Grounded, Intentional, Courageous","Male-identifying, Agender, Gender-fluid, Intersex, and Cis-men","Monthly Activist Group for Inclusive Communities","Multi-relational And Gender-Inclusive Circle"],c:1,f:"MAGIC = Male-identifying, Agender, Gender-fluid, Intersex, and Cis-men. Their dedicated sharing circle."},
      {q:"Which space is designed for non-monogamous family dynamics, including meetups with children?",o:["The Support Group","Town Hall","Families Group","MAGIC"],c:2,f:"The Families Group is specifically for people in non-monogamous family dynamics , mutual support, sharing, and organising meetups with kids."},
      {q:"What is the purpose of the Town Hall?",o:["A physical HQ building in Lisbon","Decision-making & transparency , a space to gather the whole community","A monthly lecture series on relationship psychology","An online forum for posting questions"],c:1,f:"Town Hall is Open Hub's decision-making and transparency event , where the whole community comes together to shape the organisation's direction."}
    ]
  },
  {
    id:2, icon:"🛠️", title:"Volunteer Life", sub:"Your role, responsibilities and team norms",
    doc: {
      highlight: `This is a <strong>collective project</strong>. No one is expected to do everything , there is room for different capacities and rhythms. We don't expect perfection. Just communication. <strong>Your well-being comes first. 💛</strong>`,
      sections: [
        {
          title:"🔧 What Volunteers Do",
          items:[
            {strong:"📣 Marketing & Comms",text:"Create and schedule social media content, apply brand guidelines, moderate chats when needed."},
            {strong:"📅 Calendar & Planning",text:"Keep calendars up to date, confirm event themes, help assign Lead Organisers for each event."},
            {strong:"📦 Logistics",text:"Book venues, source materials (e.g. PolyNight stickers), organise supplies like chairs, donation jar, snacks."},
            {strong:"🎪 During Events",text:"Set up & take down spaces, welcome attendees, hold space during group discussions or activities."},
            {strong:"💛 Community Care",text:"Run or support volunteer onboarding, Ethics Team work (handling concerns with care)."},
          ]
        },
        {
          title:"📋 Team Norms",
          items:[
            {strong:"📆 Monthly Meeting",text:"Online meetings on the 1st Monday of each month at 20h30 (date/time may occasionally change)."},
            {strong:"🚨 Inactivity Policy",text:"If a volunteer is absent from events, meetings and tasks for 3+ months, the team will check in. Continued inactivity may lead to removal from the active list."},
            {strong:"🛡️ Safety & Consent",text:"While on shift: model inclusive language, notice if consent or safety appears compromised, and escalate serious concerns to the Ethics Team promptly."},
            {strong:"💬 Communication",text:"If you're overwhelmed, just let someone know. Stepping back is always OK , disappearing without a word is not."},
          ]
        }
      ]
    },
    label:"Chapter 3 · Volunteer Life",
    qs:[
      {q:"When do the monthly online volunteer meetings take place?",o:["Last Friday of each month at 18h00","Every Sunday at 10h00","1st Monday of each month at 20h30","2nd Wednesday at 19h00"],c:2,f:"Monthly online meetings are on the 1st Monday of each month at 20h30 , though dates can occasionally change, so always check with the team."},
      {q:"After how long of inactivity does Open Hub check in with a volunteer?",o:["1 month","6 months","3 months","1 year"],c:2,f:"If a volunteer hasn't shown up to events, meetings, or helped with tasks for 3 months or more, the team will reach out to check in."},
      {q:"A serious consent or safety concern arises at an event. What should you do?",o:["Ignore it , not your place","Post about it on social media","Handle it entirely yourself","Escalate it promptly to the Ethics Team"],c:3,f:"Volunteers should notice and gently intervene when consent/safety appears compromised, and escalate serious concerns to the Ethics Team promptly."},
      {q:"You're overwhelmed and can't contribute this month. What does Open Hub ask of you?",o:["Resign immediately","Disappear quietly to avoid drama","Simply let someone know you need to step back","Write a formal letter of absence"],c:2,f:"Open Hub's agreement: 'We don't expect perfection. Just communication.' Step back , just let someone know. Your well-being comes first. 💛"},
      {q:"Which of these is a way volunteers can contribute to Open Hub?",o:["Only by attending events as a guest","Managing social media content and applying brand guidelines","Only by donating money monthly","Only by moderating WhatsApp groups"],c:1,f:"Volunteers contribute in many ways: social media, event planning, logistics, moderation, Ethics Team, onboarding support, and more , there's a role for everyone!"}
    ]
  }
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let cc=0, cq=0, score=0, cScores=[0,0,0], answered=false, readConfirmed=false, streak=0;
const TOTAL = chapters.reduce((s,c)=>s+c.qs.length,0);

// ─── UTILS ────────────────────────────────────────────────────────────────────
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='s-welcome'){
    spawnOrbs();
    document.querySelectorAll('.ch-card').forEach((c,i)=>{
      c.classList.remove('animate-in');
      void c.offsetWidth; // force reflow to restart animation
      c.style.animationDelay=`${.12+i*.12}s`;
      c.classList.add('animate-in');
    });
  }
}

function updateGlobalProgress(step){
  const prog = document.getElementById('global-prog');
  const fill = document.getElementById('gp-fill');
  const pct = document.getElementById('gp-pct');
  const lbl = document.getElementById('gp-label-txt');
  prog.style.display='block';
  const p = Math.round(step/((TOTAL+chapters.length*2))*100);
  fill.style.width=p+'%';
  pct.textContent=p+'%';
  lbl.textContent=`Chapter ${cc+1} of ${chapters.length}`;
  document.getElementById('nav-step').style.display='block';
  document.getElementById('nav-step').textContent=`${score} pts earned`;
}

// ─── VISUAL EFFECT HELPERS ────────────────────────────────────────────────────
function burstSparks(x, y){
  const colors=['#FCBF00','#009FE3','#E50051','#ffffff','#5a1878','#FCBF00'];
  for(let i=0;i<18;i++){
    const el=document.createElement('div');
    el.className='spark';
    const angle=Math.random()*360;
    const dist=45+Math.random()*65;
    const dx=Math.cos(angle*Math.PI/180)*dist;
    const dy=Math.sin(angle*Math.PI/180)*dist;
    const dur=.35+Math.random()*.3;
    el.style.cssText=`left:${x}px;top:${y}px;background:${colors[i%colors.length]};--dx:${dx}px;--dy:${dy}px;animation-duration:${dur}s;width:${5+Math.random()*5}px;height:${5+Math.random()*5}px;`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(), 800);
  }
}

function floatText(x, y, text, color='#FCBF00'){
  const el=document.createElement('div');
  el.className='float-up';
  el.textContent=text;
  el.style.cssText=`left:${x-16}px;top:${y-16}px;color:${color};`;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 1300);
}

function showStreakToast(n){
  document.querySelectorAll('.streak-toast').forEach(e=>e.remove());
  const msgs={2:'🔥 2 in a row!',3:'⚡ 3-streak!',4:'💥 x4 on fire!',5:'🌟 Unstoppable!'};
  const msg=msgs[Math.min(n,5)]||`🏆 ${n}-streak!`;
  const el=document.createElement('div');
  el.className='streak-toast';
  el.textContent=msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 3200);
}

function animateCount(el, from, to, duration=900){
  const start=performance.now();
  (function tick(now){
    const p=Math.min((now-start)/duration,1);
    const ease=1-Math.pow(1-p,3);
    el.textContent=Math.round(from+(to-from)*ease);
    if(p<1) requestAnimationFrame(tick);
  })(performance.now());
}

function spawnOrbs(){
  const hero=document.querySelector('.welcome-hero');
  if(!hero) return;
  hero.querySelectorAll('.hero-orb').forEach(e=>e.remove());
  const orbColors=['rgba(0,159,227,.22)','rgba(252,191,0,.18)','rgba(229,0,81,.15)','rgba(255,255,255,.1)','rgba(90,24,120,.35)'];
  for(let i=0;i<6;i++){
    const el=document.createElement('span');
    el.className='hero-orb';
    const size=22+Math.random()*52;
    el.style.cssText=`width:${size}px;height:${size}px;background:${orbColors[i%orbColors.length]};left:${5+Math.random()*85}%;bottom:${8+Math.random()*35}%;animation-duration:${6+Math.random()*7}s;animation-delay:${Math.random()*5}s;`;
    hero.appendChild(el);
  }
}

function confetti(){
  const colors=['#340C46','#FCBF00','#009FE3','#E50051','#ffffff','#5a1878'];
  for(let i=0;i<60;i++){
    const el=document.createElement('div');
    el.className='confetti-piece';
    el.style.cssText=`left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*.5}s;`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(), 3500);
  }
}

// ─── DOC READER ───────────────────────────────────────────────────────────────
function goToDoc(idx){
  cc=idx; readConfirmed=false;
  const ch=chapters[idx];
  document.getElementById('dh-icon').textContent=ch.icon;
  document.getElementById('dh-title').textContent=ch.title;
  document.getElementById('dh-sub').textContent=ch.sub;
  // Build doc content
  const wrap=document.getElementById('doc-content');
  wrap.innerHTML='';
  const hi=document.createElement('div');
  hi.className='doc-highlight';
  hi.innerHTML=ch.doc.highlight;
  wrap.appendChild(hi);
  ch.doc.sections.forEach(sec=>{
    const sd=document.createElement('div');
    sd.className='doc-section';
    sd.innerHTML=`<h3>${sec.title}</h3>`;
    const items=document.createElement('div');
    items.className='doc-items';
    sec.items.forEach(it=>{
      const d=document.createElement('div');
      d.className='doc-item';
      d.innerHTML=`<strong>${it.strong}</strong><span>${it.text}</span>`;
      items.appendChild(d);
    });
    sd.appendChild(items);
    wrap.appendChild(sd);
  });
  // Reset confirm
  const chk=document.getElementById('read-chk');
  chk.checked=false;
  const btn=document.getElementById('start-quiz-btn');
  btn.disabled=true; btn.style.opacity='.4'; btn.style.cursor='not-allowed';
  updateGlobalProgress(cc*7);
  show('s-doc');
}

function toggleConfirm(){
  const chk=document.getElementById('read-chk');
  readConfirmed=chk.checked; // read state — browser already toggled it
  const btn=document.getElementById('start-quiz-btn');
  if(readConfirmed){btn.disabled=false;btn.style.opacity='1';btn.style.cursor='pointer';}
  else{btn.disabled=true;btn.style.opacity='.4';btn.style.cursor='not-allowed';}
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function startQuiz(){
  cq=0; answered=false;
  renderQ();
  show('s-quiz');
}

function renderQ(){
  const ch=chapters[cc], q=ch.qs[cq];
  answered=false;
  document.getElementById('q-chapter').textContent=ch.label;
  document.getElementById('q-num').textContent=`Question ${cq+1} of ${ch.qs.length}`;
  document.getElementById('q-text').textContent=q.q;
  document.getElementById('q-score-val').textContent=score;
  updateGlobalProgress(cc*7+cq+1);
  const ow=document.getElementById('opts'); ow.innerHTML='';
  ['A','B','C','D'].forEach((l,i)=>{
    const b=document.createElement('button');
    b.className='opt';
    b.innerHTML=`<span class="opt-key">${l}</span>${q.o[i]}`;
    b.onclick=()=>pick(i,b);
    ow.appendChild(b);
  });
  document.getElementById('fb').style.display='none';
  document.getElementById('fb').className='feedback';
  document.getElementById('next-btn').style.display='none';
}

function pick(sel,btn){
  if(answered)return; answered=true;
  const q=chapters[cc].qs[cq];
  document.querySelectorAll('.opt').forEach((b,i)=>{
    b.disabled=true;
    if(i===q.c&&i!==sel)b.classList.add('reveal');
  });
  const fb=document.getElementById('fb');
  const isCorrect=sel===q.c;
  if(isCorrect){
    btn.classList.add('correct');
    score++; cScores[cc]++; streak++;
    fb.className='feedback ok';
    fb.innerHTML=`✅ <strong>Correct!</strong> ${q.f}`;
    // Visual feedback
    const r=btn.getBoundingClientRect();
    const cx=r.left+r.width/2, cy=r.top+r.height/2;
    burstSparks(cx, cy);
    const labels=['✨ +1','⭐ +1','💛 Correct!','🎯 +1','🌟 +1'];
    floatText(cx, cy, labels[Math.floor(Math.random()*labels.length)], '#FCBF00');
    if(streak>=2) showStreakToast(streak);
  } else {
    btn.classList.add('wrong');
    streak=0;
    fb.className='feedback no';
    fb.innerHTML=`❌ <strong>Not quite.</strong> ${q.f}`;
    // Screen shake
    const card=document.querySelector('.q-card');
    card.classList.remove('wrong-shake');
    void card.offsetWidth;
    card.classList.add('wrong-shake');
    setTimeout(()=>card.classList.remove('wrong-shake'), 500);
  }
  document.getElementById('q-score-val').textContent=score;
  fb.style.display='block';
  const nb=document.getElementById('next-btn');
  const isLastQ=cq===chapters[cc].qs.length-1, isLastCh=cc===chapters.length-1;
  nb.textContent=isLastQ?(isLastCh?'See My Results 🎉':'Chapter Complete →'):'Next Question →';
  nb.style.display='block';
}

function nextQ(){
  const ch=chapters[cc];
  if(cq===ch.qs.length-1){
    showChapterComplete();
  } else {
    cq++;
    renderQ();
  }
}

// ─── CHAPTER COMPLETE ─────────────────────────────────────────────────────────
function showChapterComplete(){
  const ch=chapters[cc];
  const chScore=cScores[cc];
  const total=ch.qs.length;
  const pct=chScore/total;
  let icon,title,sub;
  if(pct===1){icon='🏆';title='Perfect Score!';sub=`You aced the "${ch.title}" chapter with ${chScore}/${total}. You're already living the values! 🔥`}
  else if(pct>=.6){icon='🌟';title='Well Done!';sub=`${chScore} out of ${total} , you've got the essentials down for "${ch.title}"!`}
  else{icon='💪';title='Chapter Done!';sub=`${chScore} out of ${total}. Good start! The quiz helped you spot the gaps , that's the point!`}
  // Stars
  const stars=pct===1?3:pct>=.6?2:1;
  const starsEl=document.getElementById('cc-stars');
  starsEl.innerHTML='';
  for(let i=0;i<3;i++){
    const s=document.createElement('span');
    s.className='star';
    s.textContent=i<stars?'⭐':'☆';
    s.style.opacity=i<stars?'1':'.2';
    starsEl.appendChild(s);
  }
  document.getElementById('cc-icon').textContent=icon;
  document.getElementById('cc-title').textContent=title;
  document.getElementById('cc-sub').textContent=sub;
  const isLast=cc===chapters.length-1;
  const ccBtn=document.getElementById('cc-btn');
  ccBtn.textContent=isLast?'See Final Results 🎉':'Next Chapter →';
  if(pct===1) confetti();
  show('s-chcomplete');
}

function nextChapter(){
  if(cc===chapters.length-1){showResults();}
  else{goToDoc(cc+1);}
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function showResults(){
  const pct=Math.round(score/TOTAL*100);
  let icon,title,sub;
  if(pct>=90){icon='🏆';title='Exceptional Volunteer!';sub='You know Open Hub inside and out. The community is genuinely lucky to have you on the team. Welcome aboard! 🎉'}
  else if(pct>=70){icon='🌟';title='Great Work!';sub='You\'ve got a solid grasp of who we are and how we work. A quick re-read will fill any gaps , you\'re almost there!'}
  else if(pct>=50){icon='💪';title='Good Effort!';sub='A decent foundation! Re-read the sections you found tricky and try again , you\'ve got this!'}
  else{icon='🌱';title='Keep Growing!';sub='No worries , this is exactly what onboarding is for! Take your time with the docs and give it another shot. We\'re patient. 💜'}
  document.getElementById('r-icon').textContent=icon;
  document.getElementById('r-title').textContent=title;
  document.getElementById('r-sub').textContent=sub;
  setTimeout(()=>animateCount(document.getElementById('r-score'),0,score,900),400);

  // Badges
  const earnedBadges=[];
  const bdgData=[
    {l:'Community Heart',i:'💜',e:cScores[0]>=4,desc:'Chapter 1 Master'},
    {l:'Space Keeper',i:'✨',e:cScores[1]>=4,desc:'Chapter 2 Master'},
    {l:'Team Player',i:'🛠️',e:cScores[2]>=4,desc:'Chapter 3 Master'},
    {l:'All-Star Volunteer',i:'🏆',e:pct>=90,desc:'90%+ Score'},
  ];
  const bg=document.getElementById('badges-grid'); bg.innerHTML='';
  bdgData.forEach(b=>{
    if(b.e)earnedBadges.push(b);
    const el=document.createElement('div');
    el.className='badge'+(b.e?'':' locked');
    el.innerHTML=`<span class="bi">${b.e?b.i:'🔒'}</span><div class="bl">${b.l}</div><div style="font-size:11px;color:#92400e;margin-top:3px;opacity:.6">${b.desc}</div>`;
    bg.appendChild(el);
  });

  // Breakdown
  const chb=document.getElementById('ch-breakdown'); chb.innerHTML='';
  chapters.forEach((ch,i)=>{
    const row=document.createElement('div');
    row.className='ch-br-row';
    const bPct=Math.round(cScores[i]/ch.qs.length*100);
    row.innerHTML=`<span class="ch-br-icon">${ch.icon}</span><span class="ch-br-name">${ch.title}</span><div class="ch-br-bar"><div class="ch-br-fill" style="width:0%" data-target="${bPct}%"></div></div><span class="ch-br-score">${cScores[i]}/${ch.qs.length}</span>`;
    chb.appendChild(row);
  });
  setTimeout(()=>{document.querySelectorAll('.ch-br-fill').forEach(el=>el.style.width=el.dataset.target)},100);

  // Share card
  document.getElementById('sc-icon').textContent=icon;
  document.getElementById('sc-title').textContent=title;
  document.getElementById('sc-score').textContent=`${score} / ${TOTAL}`;
  const scb=document.getElementById('sc-badges'); scb.innerHTML='';
  earnedBadges.forEach(b=>{
    const sp=document.createElement('span');
    sp.className='sc-badge';
    sp.textContent=`${b.i} ${b.l}`;
    scb.appendChild(sp);
  });

  // Copy text
  const badgeNames=earnedBadges.map(b=>`${b.i} ${b.l}`).join(' · ');
  const copyText=`💜 Open Hub Volunteer Onboarding Complete!\n\n${icon} ${title}\n✅ Score: ${score}/${TOTAL} (${pct}%)\n📊 Chapters: ${chapters.map((ch,i)=>`${ch.icon} ${cScores[i]}/${ch.qs.length}`).join(' | ')}\n🏅 Badges: ${badgeNames||'Keep trying for badges!'}\n\nReady to contribute to the community! 🚀`;
  document.getElementById('copy-box').textContent=copyText;

  if(pct>=70) confetti();
  document.getElementById('global-prog').style.display='none';
  show('s-results');
}

function copyResults(){
  const text=document.getElementById('copy-box').textContent;
  navigator.clipboard.writeText(text).then(()=>{
    const s=document.getElementById('copy-success');
    s.style.display='block';
    setTimeout(()=>s.style.display='none',4000);
  }).catch(()=>{
    document.getElementById('copy-box').select && document.getElementById('copy-box').select();
    alert('Copy the text above and paste it in your WhatsApp team chat!');
  });
}

function restartAll(){
  score=0; cScores=[0,0,0]; cc=0; cq=0; answered=false; streak=0;
  document.getElementById('global-prog').style.display='none';
  document.getElementById('nav-step').style.display='none';
  show('s-welcome');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
spawnOrbs();
document.querySelectorAll('.ch-card').forEach((c,i)=>{
  c.style.animationDelay=`${.1+i*.12}s`;
  c.classList.add('animate-in');
});
