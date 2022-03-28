const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//*************************** DATA ***************************************** */
let activities = [
  ['Berserker', 'Berserkers Technique','Grudge','Awakening','Spirit Absorbtion','Raid Captain'],
  ['Berserker', 'Mayhem','Masters Tenacity','Cursed Doll','Raid Captain','Keen Blunt Weapon'],
  ['Paladin', 'Blessed Aura','Awakening','Expert','Drops of Ether','Vital Point Hit'],
  ['Gunlancer', 'Lone Knight','Grudge','Super Charge','Master Brawler','Keen Blunt Weapon'],
  ['Gunlancer', 'Combat Readiness','Stabilized Status','Barricade','Grudge','Cursed Doll'],
  ['Striker','Esoteric Flurry','Cursed Doll','Grudge','Adrenaline','Master of Ambush'],
  ['Striker','Death Blow','Cursed Doll','Master of Ambush','Grudge','Keen Blunt Weapon'],
  ['Wardancer','Esoteric Skill Enhancement','Raid Captain','Adrenaline','Grudge','Keen Blunt Weapon'],
  ['Wardancer','First Intention','Raid Captain','Keen Blunt Weapon','Grudge','Cursed Doll'],
  ['Scrapper','Taijutsu','Keen Blunt Weapon','Master of Ambush','Grudge','Cursed Doll'],
  ['Scrapper','Shock Training','Adrenaline','Spirit Absorption','Grudge','Cursed Doll'],
  ['Soulfist','Robust Spirit','Grudge','Awakening','Cursed Doll','Precise Dagger'],
  ['Soulfist','Energy Overflow','Grudge','Adrenaline','Keen Blunt Weapon','Cursed Doll'],
  ['Gunslinger','Peacemaker','Hit Master','Adrenaline','Grudge','Keen Blunt Weapon'],
  ['Gunslinger','Time to Hunt','Keen Blunt Weapon','Grudge','Adrenaline','Cursed Doll'],
  ['Artillerist','Firepower Enhancement','Grudge','Keen Blunt Weapon','Cursed Doll','Barricade'],
  ['Deadeye','Enhanced Weapon','Master of Ambush','Grudge','Adrenaline','Keen Blunt Weapon'],
  ['Deadeye','Pistoleer','Adrenaline','Precise Dagger','Grudge','Cursed Doll'],
  ['Sharpshooter','Death Strike','Grudge','Keen Blunt Weapon','Hit Master','Loyal Companion'],
  ['Sharpshooter','Loyal Companion','Grudge','Hit Master','Raid Captain','Keen Blunt Weapon'],
  ['Bard','Desperate Salvation','Awakening','Expert','Max MP Increase','Heavy Armor'],
  ['Sorceress','Igniter','All-Out Attack','Precise Dagger','Grudge','Cursed Doll'],
  ['Sorceress','Reflux','Adrenaline','Precise Dagger','Grudge','Hit Master'],
  ['Shadowhunter','Perfect Suppression','Grudge','Cursed Doll','Master of Ambush','Keen Blunt Weapon'],
  ['Shadowhunter','Demonic Impulse','Spirit Absorption','Grudge','Raid Captain','Cursed Doll'],
  ['Deathblade','Surge','Adrenaline','Master of Ambush','Grudge','Cursed Doll'],
  ['Deathblade','Remaining Energy','Super Charge','Master of Ambush','Grudge','Cursed Doll']

];




// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-containercombo");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});
var depo = [];
optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    //var a = selected.innerHTML;//showing the selected 
    //console.log(a);
    depo.shift(); 
    depo.push(selected.innerHTML);

  });
});
console.log(depo);
searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};


// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-containercombo2");
const searchBox2 = document.querySelector(".search-box2 input");

const optionsList2 = document.querySelectorAll(".option2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");

  searchBox2.value = "";
  filterList2("");

  if (optionsContainer2.classList.contains("active")) {
    searchBox2.focus();
  }
});
var depo2 =[];
optionsList2.forEach(o1 => {
  o1.addEventListener("click", () => {
    //var b = 0 ;
    selected2.innerHTML = o1.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
    //var b = selected2.innerHTML;//showing the selected 
    //console.log(b);
    depo2.shift();
    depo2.push(selected2.innerHTML);
  });
});
console.log(depo2);
searchBox2.addEventListener("keyup", function(e) {
  filterList2(e.target.value);
});

const filterList2 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList2.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected5 = document.querySelector(".selected5");
const optionsContainer5 = document.querySelector(".options-containercombo5");
const searchBox5 = document.querySelector(".search-box5 input");

const optionsList5 = document.querySelectorAll(".option5");

selected5.addEventListener("click", () => {
  optionsContainer5.classList.toggle("active");

  searchBox5.value = "";
  filterList5("");

  if (optionsContainer5.classList.contains("active")) {
    searchBox5.focus();
  }
});
var depo5 =[];
optionsList5.forEach(o5 => {
  o5.addEventListener("click", () => {
    selected5.innerHTML = o5.querySelector("label").innerHTML;
    optionsContainer5.classList.remove("active");
    depo5.shift();
    depo5.push(selected5.innerHTML);
  });
});
console.log(depo5);
searchBox5.addEventListener("keyup", function(e) {
  filterList5(e.target.value);
});

const filterList5 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList5.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected6 = document.querySelector(".selected6");
const optionsContainer6 = document.querySelector(".options-containercombo6");
const searchBox6 = document.querySelector(".search-box6 input");

const optionsList6 = document.querySelectorAll(".option6");

selected6.addEventListener("click", () => {
  optionsContainer6.classList.toggle("active");

  searchBox6.value = "";
  filterList6("");

  if (optionsContainer6.classList.contains("active")) {
    searchBox6.focus();
  }
});
var depo6 =[];
optionsList6.forEach(o6 => {
  o6.addEventListener("click", () => {
    selected6.innerHTML = o6.querySelector("label").innerHTML;
    optionsContainer6.classList.remove("active");
    depo6.shift();
    depo6.push(selected6.innerHTML);
  });
});
console.log(depo6);
searchBox6.addEventListener("keyup", function(e) {
  filterList6(e.target.value);
});

const filterList6 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList6.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected3 = document.querySelector(".selected3");
const optionsContainer3 = document.querySelector(".options-containercombo3");
const searchBox3 = document.querySelector(".search-box3 input");

const optionsList3 = document.querySelectorAll(".option3");

selected3.addEventListener("click", () => {
  optionsContainer3.classList.toggle("active");

  searchBox3.value = "";
  filterList3("");

  if (optionsContainer3.classList.contains("active")) {
    searchBox3.focus();
  }
});
var depo3 =[];
optionsList3.forEach(o2 => {
  o2.addEventListener("click", () => {
    selected3.innerHTML = o2.querySelector("label").innerHTML;
    optionsContainer3.classList.remove("active");
    depo3.shift();
    depo3.push(selected3.innerHTML);
  });
});
console.log(depo3);
searchBox3.addEventListener("keyup", function(e) {
  filterList3(e.target.value);
});

const filterList3 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList3.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected4 = document.querySelector(".selected4");
const optionsContainer4 = document.querySelector(".options-containercombo4");
const searchBox4 = document.querySelector(".search-box4 input");

const optionsList4 = document.querySelectorAll(".option4");

selected4.addEventListener("click", () => {
  optionsContainer4.classList.toggle("active");

  searchBox4.value = "";
  filterList3("");

  if (optionsContainer4.classList.contains("active")) {
    searchBox4.focus();
  }
});
var depo4 =[];
optionsList4.forEach(o4 => {
  o4.addEventListener("click", () => {
    selected4.innerHTML = o4.querySelector("label").innerHTML;
    optionsContainer4.classList.remove("active");
    depo4.shift();
    depo4.push(selected4.innerHTML);
  });
});
console.log(depo4);
searchBox4.addEventListener("keyup", function(e) {
  filterList4(e.target.value);
});

const filterList4 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList4.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected7 = document.querySelector(".selected7");
const optionsContainer7 = document.querySelector(".options-containercombo7");
const searchBox7 = document.querySelector(".search-box7 input");

const optionsList7 = document.querySelectorAll(".option7");

selected7.addEventListener("click", () => {
  optionsContainer7.classList.toggle("active");

  searchBox7.value = "";
  filterList3("");

  if (optionsContainer7.classList.contains("active")) {
    searchBox7.focus();
  }
});
var depo7 =[];
optionsList7.forEach(o7 => {
  o7.addEventListener("click", () => {
    selected7.innerHTML = o7.querySelector("label").innerHTML;
    optionsContainer7.classList.remove("active");
    depo7.shift();
    depo7.push(selected7.innerHTML);
  });
});
console.log(depo7);
searchBox7.addEventListener("keyup", function(e) {
  filterList7(e.target.value);
});

const filterList7 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList7.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected8 = document.querySelector(".selected8");
const optionsContainer8 = document.querySelector(".options-containercombo8");
const searchBox8 = document.querySelector(".search-box8 input");

const optionsList8 = document.querySelectorAll(".option8");

selected8.addEventListener("click", () => {
  optionsContainer8.classList.toggle("active");

  searchBox8.value = "";
  filterList3("");

  if (optionsContainer8.classList.contains("active")) {
    searchBox8.focus();
  }
});
var depo8 =[];
optionsList8.forEach(o8 => {
  o8.addEventListener("click", () => {
    selected8.innerHTML = o8.querySelector("label").innerHTML;
    optionsContainer8.classList.remove("active");
    depo8.shift();
    depo8.push(selected8.innerHTML);
  });
});
console.log(depo8);
searchBox8.addEventListener("keyup", function(e) {
  filterList8(e.target.value);
});

const filterList8 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList8.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
// comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2
const selected9 = document.querySelector(".selected9");
const optionsContainer9 = document.querySelector(".options-containercombo9");
const searchBox9 = document.querySelector(".search-box9 input");

const optionsList9 = document.querySelectorAll(".option9");

selected9.addEventListener("click", () => {
  optionsContainer9.classList.toggle("active");

  searchBox9.value = "";
  filterList3("");

  if (optionsContainer9.classList.contains("active")) {
    searchBox9.focus();
  }
});
var depo9 =[];
optionsList9.forEach(o9 => {
  o9.addEventListener("click", () => {
    selected9.innerHTML = o9.querySelector("label").innerHTML;
    optionsContainer9.classList.remove("active");
    depo9.shift();
    depo9.push(selected9.innerHTML);
  });
});
console.log(depo9);
searchBox9.addEventListener("keyup", function(e) {
  filterList9(e.target.value);
});

const filterList9 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList9.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
//comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const selected10 = document.querySelector(".selected10");
const optionsContainer10 = document.querySelector(".options-containercombo10");
const searchBox10 = document.querySelector(".search-box10 input");

const optionsList10 = document.querySelectorAll(".option10");

selected10.addEventListener("click", () => {
  optionsContainer10.classList.toggle("active");

  searchBox10.value = "";
  filterList3("");

  if (optionsContainer10.classList.contains("active")) {
    searchBox10.focus();
  }
});
var depo10 =[];
optionsList10.forEach(o10 => {
  o10.addEventListener("click", () => {
    selected10.innerHTML = o10.querySelector("label").innerHTML;
    optionsContainer10.classList.remove("active");
    depo10.shift();
    depo10.push(selected10.innerHTML);
  });
});
console.log(depo10);
searchBox10.addEventListener("keyup", function(e) {
  filterList10(e.target.value);
});

const filterList10 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList10.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
//comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const selected11 = document.querySelector(".selected11");
const optionsContainer11 = document.querySelector(".options-containercombo11");
const searchBox11 = document.querySelector(".search-box11 input");

const optionsList11 = document.querySelectorAll(".option11");

selected11.addEventListener("click", () => {
  optionsContainer11.classList.toggle("active");

  searchBox11.value = "";
  filterList3("");

  if (optionsContainer11.classList.contains("active")) {
    searchBox11.focus();
  }
});
var depo11 =[];
optionsList11.forEach(o11 => {
  o11.addEventListener("click", () => {
    selected11.innerHTML = o11.querySelector("label").innerHTML;
    optionsContainer11.classList.remove("active");
    depo11.shift();
    depo11.push(selected11.innerHTML);
  });
});
console.log(depo11);
searchBox11.addEventListener("keyup", function(e) {
  filterList11(e.target.value);
});

const filterList11 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList11.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
//comboboxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const selected12 = document.querySelector(".selected12");
const optionsContainer12 = document.querySelector(".options-containercombo12");
const searchBox12 = document.querySelector(".search-box12 input");

const optionsList12 = document.querySelectorAll(".option12");

selected12.addEventListener("click", () => {
  optionsContainer12.classList.toggle("active");

  searchBox12.value = "";
  filterList3("");

  if (optionsContainer12.classList.contains("active")) {
    searchBox12.focus();
  }
});
var depo12 =[];
optionsList12.forEach(o12 => {
  o12.addEventListener("click", () => {
    selected12.innerHTML = o12.querySelector("label").innerHTML;
    optionsContainer12.classList.remove("active");
    depo12.shift();
    depo12.push(selected12.innerHTML);
  });
});
console.log(depo12);
searchBox12.addEventListener("keyup", function(e) {
  filterList12(e.target.value);
});

const filterList12 = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList12.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};


let urlist = [
  ['Berserker', 'Berserkers Technique','https://images.ctfassets.net/umhrp0op95v1/1hkpOajzY2iKIddBPSFrnL/19aa23ff1ea417c5f2a50bcb8cf22550/LA_ADVANCED_CLASS_INDEX_BERSERKER.jpg',"https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/berserker's_technique.jpg"],
  ['Berserker', 'Mayhem','https://images.ctfassets.net/umhrp0op95v1/1hkpOajzY2iKIddBPSFrnL/19aa23ff1ea417c5f2a50bcb8cf22550/LA_ADVANCED_CLASS_INDEX_BERSERKER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/mayhem.jpg'],
  ['Paladin', 'Blessed Aura','https://images.ctfassets.net/umhrp0op95v1/71MyoO68adxHz8m3EOuKlK/9611d5a0de01341337ed16baa3a4965a/LA_ADVANCED_CLASS_INDEX_HOLY_KNIGHT.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/blessed_aura.jpg'],
  ['Gunlancer', 'Lone Knight','https://images.ctfassets.net/umhrp0op95v1/5Zz3tEyE7amDArNYxLVs2F/ccb6eb1923701d50ee8c39f6e864e6e7/LA_ADVANCED_CLASS_INDEX_WARLORD.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/solo_knight.jpg'],
  ['Gunlancer', 'Combat Readiness','https://images.ctfassets.net/umhrp0op95v1/5Zz3tEyE7amDArNYxLVs2F/ccb6eb1923701d50ee8c39f6e864e6e7/LA_ADVANCED_CLASS_INDEX_WARLORD.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/combat_readiness.jpg'],
  ['Striker','Esoteric Flurry','https://images.ctfassets.net/umhrp0op95v1/4Lcn99G4ug7xQ4dyefe3on/7202b18da1f367bfe954d3e5841e9002/LA_ADVANCED_CLASS_INDEX_STRIKER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/esoteric_flurry.jpg'],
  ['Striker','Death Blow','https://images.ctfassets.net/umhrp0op95v1/4Lcn99G4ug7xQ4dyefe3on/7202b18da1f367bfe954d3e5841e9002/LA_ADVANCED_CLASS_INDEX_STRIKER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/deathblow_striker.jpg'],
  ['Wardancer','Esoteric Skill Enhancement','https://images.ctfassets.net/umhrp0op95v1/j08QkCxJW6xlkmIKJ4Wvz/2ca0358c3466cda9933f6e16fca1daea/LA_ADVANCED_CLASS_INDEX_WARDANCER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/esoteric_skill_enhancement.jpg'],
  ['Wardancer','First Intention','https://images.ctfassets.net/umhrp0op95v1/j08QkCxJW6xlkmIKJ4Wvz/2ca0358c3466cda9933f6e16fca1daea/LA_ADVANCED_CLASS_INDEX_WARDANCER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/first_intention.jpg'],
  ['Scrapper','Taijutsu','https://images.ctfassets.net/umhrp0op95v1/QPdqIk0B5sVgsV4rHVYLu/ceed8e1e07d5ec9cceb1ad1e77633e3c/LA_ADVANCED_CLASS_INDEX_SCRAPPER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/ultimate_skill_taijutsu.jpg'],
  ['Scrapper','Shock Training','https://images.ctfassets.net/umhrp0op95v1/QPdqIk0B5sVgsV4rHVYLu/ceed8e1e07d5ec9cceb1ad1e77633e3c/LA_ADVANCED_CLASS_INDEX_SCRAPPER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/shock_training.jpg'],
  ['Soulfist','Robust Spirit','https://images.ctfassets.net/umhrp0op95v1/4SJ0UY6pmJSvqVITi84h2L/ffa425f70815d95c3f88815a8195f4c9/LA_ADVANCED_CLASS_INDEX_SOULFIST.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/roboust.jpg'],
  ['Soulfist','Energy Overflow','https://images.ctfassets.net/umhrp0op95v1/4SJ0UY6pmJSvqVITi84h2L/ffa425f70815d95c3f88815a8195f4c9/LA_ADVANCED_CLASS_INDEX_SOULFIST.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/energy_overflow.jpg'],
  ['Gunslinger','Peacemaker','https://images.ctfassets.net/umhrp0op95v1/3KnPFsH0o1TRp3IkaHIU4D/48f7b6fdb6ae9af52f5545c239df3b65/LA_ADVANCED_CLASS_INDEX_GUNSLINGER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/peacemaker_gunslinger.jpg'],
  ['Gunslinger','Time to Hunt','https://images.ctfassets.net/umhrp0op95v1/3KnPFsH0o1TRp3IkaHIU4D/48f7b6fdb6ae9af52f5545c239df3b65/LA_ADVANCED_CLASS_INDEX_GUNSLINGER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/time_to_hunt_gunslinger.jpg'],
  ['Artillerist','Firepower Enhancement','https://images.ctfassets.net/umhrp0op95v1/1sQEjNqD5pd334zzpjoQ8x/f26509985360adbcb416f73c1ee9052d/LA_ADVANCED_CLASS_INDEX_ARTILLERIST.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/firepower_enhancement.jpg'],
  ['Deadeye','Enhanced Weapon','https://images.ctfassets.net/umhrp0op95v1/6xNNAkPej3xfmYxp1otSfc/f5f3d6ddd029a566a6682aec96583b98/LA_ADVANCED_CLASS_INDEX_DEADEYE.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/enhanced_weapon.jpg'],
  ['Deadeye','Pistoleer','https://images.ctfassets.net/umhrp0op95v1/6xNNAkPej3xfmYxp1otSfc/f5f3d6ddd029a566a6682aec96583b98/LA_ADVANCED_CLASS_INDEX_DEADEYE.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/pistoleer.jpg'],
  ['Sharpshooter','Death Strike','https://images.ctfassets.net/umhrp0op95v1/2AvY3YNjNhSCp58Edqnl27/801380f602fee888e8a253aebe82586e/LA_ADVANCED_CLASS_INDEX_SHARPSHOOTER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/death_strike.jpg'],
  ['Sharpshooter','Loyal Companion','https://images.ctfassets.net/umhrp0op95v1/2AvY3YNjNhSCp58Edqnl27/801380f602fee888e8a253aebe82586e/LA_ADVANCED_CLASS_INDEX_SHARPSHOOTER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/loyal_companion.jpg'],
  ['Bard','Desperate Salvation','https://images.ctfassets.net/umhrp0op95v1/2g0W7co1jA4lLyCrmmpdMY/a052cb53a134480378acb614df3a7d7a/LA_ADVANCED_CLASS_INDEX_BARD.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/desperate_salvation.jpg'],
  ['Sorceress','Igniter','https://images.ctfassets.net/umhrp0op95v1/5Q5EZAGYY7vFoIYu8VOgLh/605e7a2d5859e21fe3606cd652e994c5/LA_ADVANCED_CLASS_INDEX_SORCERESS.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/igniter.jpg'],
  ['Sorceress','Reflux','https://images.ctfassets.net/umhrp0op95v1/5Q5EZAGYY7vFoIYu8VOgLh/605e7a2d5859e21fe3606cd652e994c5/LA_ADVANCED_CLASS_INDEX_SORCERESS.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/reflux.jpg'],
  ['Shadowhunter','Perfect Suppression','https://images.ctfassets.net/umhrp0op95v1/MCTBeTAsNTLxAsOXIEqZF/7013f389efe8969ac189bb6ba603cd1e/LA_ADVANCED_CLASS_INDEX_SHADOWHUNTER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/perfect_suppresion.jpg'],
  ['Shadowhunter','Demonic Impulse','https://images.ctfassets.net/umhrp0op95v1/MCTBeTAsNTLxAsOXIEqZF/7013f389efe8969ac189bb6ba603cd1e/LA_ADVANCED_CLASS_INDEX_SHADOWHUNTER.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/demonic_impulse.jpg'],
  ['Deathblade','Surge','https://images.ctfassets.net/umhrp0op95v1/6KEvGvaogDCrxJAPeuxzju/752515e3dfa76a06f1f100c1e6dcdcba/LA_ADVANCED_CLASS_INDEX_DEATHBLADE.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/surge.jpg'],
  ['Deathblade','Remaining Energy','https://images.ctfassets.net/umhrp0op95v1/6KEvGvaogDCrxJAPeuxzju/752515e3dfa76a06f1f100c1e6dcdcba/LA_ADVANCED_CLASS_INDEX_DEATHBLADE.jpg','https://raw.githubusercontent.com/okademirbilek/lostarkimages/main/images/remaining_energy.jpg']

];



function ara (value1,value2){
  if (value1!==value2){
    document.getElementById("main__containerdevam").innerHTML = "";//clearing div 
    //query operations
    makeRows(4,5);
    var arrayLength = activities.length;
    var arrayWidth  = 6;
    //console.log(arrayLength);
    //var ekran=[]
    var gridcounter= 0;
    for (var i = 0; i < arrayLength; i++) {
      //console.log(myStringArray[i]);
      var counter = 0;
      for (var j = 2; j < arrayWidth; j++) {
        
        //console.log(myStringArray[j]);
        if (activities[i][j] == value1) {
          counter = counter + 1;
        }
        else{
          //console.log("no match1");
        }
        if (activities[i][j] == value2) {
          counter = counter+1;
        }else{
          //console.log("no match2");
        }
        //another if else for printing 
        //console.log(counter);
      }  
      if (counter>1){
        gridcounter=gridcounter+1;
        console.log(activities[i][0]," ",activities[i][1]);
        //ekran[i]=activities[i];
        //ekran.push(activities[i][0],activities[i][1]);
        console.log(urlist[i][2]);
        
        //Yöntem 1 
        //var img=document.createElement("img");
        var img = new Image(); 
        var image2 = new Image();
        img.src = urlist[i][2];
        img.id="imageclass";
        image2.src = urlist[i][3];
        image2.id = "image2";
        //var block = document.getElementById("main__containerdevam");
        var blocks=document.getElementById(gridcounter);
        blocks.innerHTML = "<span class = 'span1' >"+urlist[i][1]+"</span>";
        //blocks.innerHTML = "<span class='tooltiptext'>Tooltip text</span>";
        //blocks.innerHTML = "<span class = 'span1' >"+urlist[i][0]+"<br>"+urlist[i][1]+"</span>";
        blocks.appendChild(image2);
        blocks.appendChild(img);
        
        
    
    
        
        //block.appendChild(img);
        //block.appendChild(image2);
       
        //block2.appendChild()

        
        
        
        

        //yöntem2
        //var image = new Image();
        //var image2 = new Image();
        //image.src = urlist[i][2];
        //image2.src = "images/roboust.jpg";
        //image.id = "image";
        //image2.id = "image2";
        //image2.class ="imagex";
        //var parent = document.getElementById("main__containerdevam");
        //parent.innerHTML +="<p10 class='textberkay'>"+activities[i][0]+" "+activities[i][1]+"</p10>";
        //parent.append(image);
        //parent.append(image2);
      
        
        
      }else{
        //console.log("2den kucuk");
      } 
    }
    //console.log(ekran);
    //document.getElementById("main__containerdevam").innerHTML= ekran;
    //document.getElementById("main__containerdevam").style.color = "orange";
    //document.getElementById("main__containerdevam").style.fontSize = "larger"
    
    

    
  }else{
    alert("Values cannot be equal");
  }
}

function makeRows(rows, cols) {
  main__containerdevam.style.setProperty('--grid-rows', rows);
  main__containerdevam.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    cell.id=(c+1);
    main__containerdevam.appendChild(cell).className = "grid-item";
   
  };
};

document.getElementById("btn").onclick = function() {
  ara(depo[0],depo2[0]); 
}


let combats = [
  ['Berserker','Berserkers Technique','Crit','Specialization','Grudge','Awakening','Spirit Absorbtion','Raid Captain','Berserkers Technique'],
  ['Berserker','Mayhem','Crit','Swiftness','Masters Tenacity','Cursed Doll','Raid Captain','Keen Blunt Weapon','Mayhem'],
  ['Paladin','Blessed Aura','Specialization','Swiftness','Awakening','Expert','Drops of Ether','Vital Point Hit','Blessed Aura'],
  ['Gunlancer','Lone Knight','Crit','Swiftness','Grudge','Super Charge','Master Brawler','Keen Blunt Weapon','Lone Knight'],
  ['Gunlancer','Combat Readiness','Crit','Specialization','Stabilized Status','Barricade','Grudge','Cursed Doll','Combat Readiness'],
  ['Striker','Esoteric Flurry','Crit','Swiftness','Cursed Doll','Grudge','Adrenaline','Master of Ambush','Esoteric Flurry'],
  ['Striker','Death Blow','Crit','Specialization','Cursed Doll','Master of Ambush','Grudge','Keen Blunt Weapon','Death Blow'],
  ['Wardancer','Esoteric Skill Enhancement','Specialization','Swiftness','Raid Captain','Adrenaline','Grudge','Keen Blunt Weapon','Esoteric Skill Enhancement'],
  ['Wardancer','First Intention','Crit','Swiftness','Raid Captain','Keen Blunt Weapon','Grudge','Cursed Doll','First Intention'],
  ['Scrapper','Taijutsu','Crit','Swiftness','Keen Blunt Weapon','Master of Ambush','Grudge','Cursed Doll','Taijutsu'],
  ['Scrapper','Shock Training','Crit','Specialization','Adrenaline','Spirit Absorption','Grudge','Cursed Doll','Shock Training'],
  ['Soulfist','Robust Spirit','Crit','Specialization','Grudge','Awakening','Cursed Doll','Precise Dagger','Robust Spirit'],
  ['Soulfist','Energy Overflow','Crit','Swiftness','Grudge','Adrenaline','Keen Blunt Weapon','Cursed Doll','Energy Overflow'],
  ['Gunslinger','Peacemaker','Crit','Swiftness','Hit Master','Adrenaline','Grudge','Keen Blunt Weapon','Peacemaker'],
  ['Gunslinger','Time to Hunt','Specialization','Swiftness','Keen Blunt Weapon','Grudge','Adrenaline','Cursed Doll','Time to Hunt'],
  ['Artillerist','Firepower Enhancement','Crit','Swiftness','Grudge','Keen Blunt Weapon','Cursed Doll','Barricade','Firepower Enhancement'],
  ['Deadeye','Enhanced Weapon','Crit','Specialization','Master of Ambush','Grudge','Adrenaline','Keen Blunt Weapon','Enhanced Weapon'],
  ['Deadeye','Pistoleer','Specialization','Swiftness','Adrenaline','Precise Dagger','Grudge','Cursed Doll','Pistoleer'],
  ['Sharpshooter','Death Strike','Crit','Specialization','Grudge','Keen Blunt Weapon','Hit Master','Loyal Companion','Death Strike'],
  ['Sharpshooter','Loyal Companion','Crit','Swiftness','Grudge','Hit Master','Raid Captain','Keen Blunt Weapon','Loyal Companion'],
  ['Bard','Desperate Salvation','Specialization','Swiftness','Awakening','Expert','Max MP Increase','Heavy Armor','Desperate Salvation'],
  ['Sorceress','Igniter','Crit','Specialization','All-Out Attack','Precise Dagger','Grudge','Cursed Doll','Igniter'],
  ['Sorceress','Reflux','Crit','Swiftness','Adrenaline','Precise Dagger','Grudge','Hit Master','Reflux'],
  ['Shadowhunter','Perfect Suppression','Crit','Swiftness','Grudge','Cursed Doll','Master of Ambush','Keen Blunt Weapon','Perfect Suppression'],
  ['Shadowhunter','Demonic Impulse','Crit','Specialization','Spirit Absorption','Grudge','Raid Captain','Cursed Doll','Demonic Impulse'],
  ['Deathblade','Surge','Crit','Specialization','Master of Ambush','Grudge','Cursed Doll','Surge'],
  ['Deathblade','Remaining Energy','Crit','Specialization','Super Charge','Master of Ambush','Grudge','Cursed Doll','Remaining Energy']

];


function necklace (value1,value2,value3,value4){
  console.log(value1,value2,value3,value4);
  if(value1!==value2 && value3!==value4){
    for (var i = 0; i < 27; i++) {
      var counter1 = 0;
      for (var j = 2; j < 4; j++) {
        if (combats[i][j] == value1) {
          counter1 = counter1 + 1;
        }
        else{
          //console.log("no match1");
        }
        if (combats[i][j] == value2) {
          counter1 = counter1+1;
        }else{
          //console.log("no match2");
        }
      }  
      //console.log(counter1);
      if (counter1>1){
        //console.log(combats[i][0]," ",combats[i][1]);
        //console.log(combats[i][2]," ",combats[i][3]);
        var caunter2=0;
        for (var k = 4; k <9 ; k++) {
          if (combats[i][k] == value3 || combats[i][k] == value4){
            caunter2 = caunter2 + 1 ;
          }else{
          //console.log("no match1");
          }
        }
        //console.log(caunter2);
        if (caunter2==1){
          console.log("perfect combat stats and 1 engraving matched");
          //console.log(activities[k][0]," ",activities[k][1]);
          //console.log(combats[k][2]," ",combats[k][3]);
          //console.log(combats[i][0]," ",combats[i][1]);
          //console.log(combats[i][2]," ",combats[i][3]);
          console.log(i);
          console.log(combats[i]);
          var img=document.createElement("img");
          var image2 = new Image();
          img.src = urlist[i][2];
          img.id="imageclass";
          image2.src = urlist[i][3];
          image2.id = "image2";
          var block = document.getElementById("main__containerdevam2");
          block.appendChild(img);
          block.appendChild(image2);
          caunter2=0;
        }else if(caunter2==2){
          console.log("perfect combat stats and perfect engravings");
          //console.log(activities[k][0]," ",activities[k][1]);
          //console.log(combats[k][2]," ",combats[k][3]);
          //console.log(combats[i][0]," ",combats[i][1]);
          //console.log(combats[i][2]," ",combats[i][3]);
          console.log(i);
          console.log(combats[i]);
          var img=document.createElement("img");
          var image2 = new Image();
          img.src = urlist[i][2];
          img.id="imageclass";
          image2.src = urlist[i][3];
          image2.id = "image2";
          var block = document.getElementById("main__containerdevam2");
          block.appendChild(img);
          block.appendChild(image2);
          caunter2=0;
        }else if(caunter2==0){
          //console.log("good combat stats but no engravings matched")
        }
      

      }else{
        //console.log("no combat stats matched")
      }
     
    }    
    //depo5=[];
    //depo6=[];
  }else{
    alert("Values cannot be equal");
    return;
  }  
}

document.getElementById("btn2").onclick = function() {
  necklace(depo5[0],depo6[0],depo3[0],depo4[0]);
}




let combatsEar = [
  ['Berserker','Berserkers Technique','Specialization',' ','Grudge','Awakening','Spirit Absorbtion','Raid Captain','Berserkers Technique'],
  ['Berserker','Mayhem','Crit',' ','Masters Tenacity','Cursed Doll','Raid Captain','Keen Blunt Weapon','Mayhem'],
  ['Paladin', 'Blessed Aura','Swiftness',' ','Awakening','Expert','Drops of Ether','Vital Point Hit','Blessed Aura'],
  ['Gunlancer','Lone Knight','Crit',' ','Grudge','Super Charge','Master Brawler','Keen Blunt Weapon','Lone Knight'],
  ['Gunlancer','Combat Readiness','Specialization',' ','Stabilized Status','Barricade','Grudge','Cursed Doll','Combat Readiness'],
  ['Striker','Esoteric Flurry','Specialization','Swiftness','Cursed Doll','Grudge','Adrenaline','Master of Ambush','Esoteric Flurry'],//2
  ['Striker','Death Blow','Specialization',' ','Cursed Doll','Master of Ambush','Grudge','Keen Blunt Weapon','Death Blow'],
  ['Wardancer','Esoteric Skill Enhancement','Swiftness',' ','Raid Captain','Adrenaline','Grudge','Keen Blunt Weapon','Esoteric Skill Enhancement'],
  ['Wardancer','First Intention','Swiftness',' ','Raid Captain','Keen Blunt Weapon','Grudge','Cursed Doll','First Intention'],
  ['Scrapper','Taijutsu','Crit',' ','Keen Blunt Weapon','Master of Ambush','Grudge','Cursed Doll','Taijutsu'],
  ['Scrapper','Shock Training','Crit','Specialization','Adrenaline','Spirit Absorption','Grudge','Cursed Doll','Shock Training'],//2
  ['Soulfist','Robust Spirit','Specialization',' ','Grudge','Awakening','Cursed Doll','Precise Dagger','Robust Spirit'],
  ['Soulfist','Energy Overflow','Swiftness',' ','Grudge','Adrenaline','Keen Blunt Weapon','Cursed Doll','Energy Overflow'],
  ['Gunslinger','Peacemaker','Crit',' ','Hit Master','Adrenaline','Grudge','Keen Blunt Weapon','Peacemaker'],
  ['Gunslinger','Time to Hunt','Specialization','Swiftness','Keen Blunt Weapon','Grudge','Adrenaline','Cursed Doll','Time to Hunt'],//2
  ['Artillerist','Firepower Enhancement','Crit',' ','Grudge','Keen Blunt Weapon','Cursed Doll','Barricade','Firepower Enhancement'],
  ['Deadeye','Enhanced Weapon','Specialization',' ','Master of Ambush','Grudge','Adrenaline','Keen Blunt Weapon','Enhanced Weapon'],
  ['Deadeye','Pistoleer','Specialization',' ','Adrenaline','Precise Dagger','Grudge','Cursed Doll','Pistoleer'],
  ['Sharpshooter','Death Strike','Crit','Specialization','Grudge','Keen Blunt Weapon','Hit Master','Loyal Companion','Death Strike'],//2
  ['Sharpshooter','Loyal Companion','Swiftness',' ','Grudge','Hit Master','Raid Captain','Keen Blunt Weapon','Loyal Companion'],
  ['Bard','Desperate Salvation','Swiftness',' ','Awakening','Expert','Max MP Increase','Heavy Armor','Desperate Salvation'],
  ['Sorceress','Igniter','Specialization',' ','All-Out Attack','Precise Dagger','Grudge','Cursed Doll','Igniter'],
  ['Sorceress','Reflux','Crit',' ','Adrenaline','Precise Dagger','Grudge','Hit Master','Reflux'],
  ['Shadowhunter','Perfect Suppression','Crit',' ','Grudge','Cursed Doll','Master of Ambush','Keen Blunt Weapon','Perfect Suppression'],
  ['Shadowhunter','Demonic Impulse','Specialization',' ','Spirit Absorption','Grudge','Raid Captain','Cursed Doll','Demonic Impulse'],
  ['Deathblade','Surge','Specialization',' ','Master of Ambush','Grudge','Cursed Doll','Surge'],
  ['Deathblade','Remaining Energy','Specialization',' ','Super Charge','Master of Ambush','Grudge','Cursed Doll','Remaining Energy']

];


function earring (value1,value2,value3){
  console.log(value1,value2,value3);
  if( value2!==value3){
    for (var i = 0; i < 27; i++) {
      var counter1 = 0;
      for (var j = 2; j < 4; j++) {
        if (combatsEar[i][j] == value1) {
          counter1 = counter1 + 1;
        }
        else{
          //console.log("no match1");
        }
      }  
      //console.log(counter1);
      if (counter1>0){
        var caunter2=0;
        for (var k = 3; k <9 ; k++) {
          if (combatsEar[i][k] == value2 || combatsEar[i][k] == value3){
            caunter2 = caunter2 + 1 ;
          }else{
          //console.log("no match1");
          }
        }
        //console.log(caunter2);
        if (caunter2==1){
          console.log("perfect combat stats and 1 engraving matched");
          console.log(combatsEar[i]);
          var img=document.createElement("img");
          var image2 = new Image();
          img.src = urlist[i][2];
          img.id="imageclass";
          image2.src = urlist[i][3];
          image2.id = "image2";
          var block = document.getElementById("main__containerdevam3");
          block.appendChild(img);
          block.appendChild(image2);
          caunter2=0;
        }else if(caunter2==2){
          console.log("perfect combat stats and perfect engravings");
          console.log(combatsEar[i]);
          var img=document.createElement("img");
          var image2 = new Image();
          img.src = urlist[i][2];
          img.id="imageclass";
          image2.src = urlist[i][3];
          image2.id = "image2";
          var block = document.getElementById("main__containerdevam3");
          block.appendChild(img);
          block.appendChild(image2);
          caunter2=0;
        }else if(caunter2==0){
          //console.log("good combat stats but no engravings matched")
        }
      

      }else{
        //console.log("no combat stats matched")
      }
     
    }
  }else{
    alert("Values cannot be equal");
  }  
}

document.getElementById("btn3").onclick = function() {
  earring(depo7[0],depo8[0],depo9[0]);
}

/*ringssssssssssssssssssssssssssssssssssssssssssss*/ 
let combatsring = [
  ['Berserker','Berserkers Technique','Specialization',' ','Grudge','Awakening','Spirit Absorbtion','Raid Captain','Berserkers Technique'],
  ['Berserker','Mayhem','Swiftness',' ','Masters Tenacity','Cursed Doll','Raid Captain','Keen Blunt Weapon','Mayhem'],
  ['Paladin', 'Blessed Aura','Swiftness',' ','Awakening','Expert','Drops of Ether','Vital Point Hit','Blessed Aura'],
  ['Gunlancer','Lone Knight','Crit',' ','Grudge','Super Charge','Master Brawler','Keen Blunt Weapon','Lone Knight'],
  ['Gunlancer','Combat Readiness','Specialization',' ','Stabilized Status','Barricade','Grudge','Cursed Doll','Combat Readiness'],
  ['Striker','Esoteric Flurry','Specialization','Swiftness','Cursed Doll','Grudge','Adrenaline','Master of Ambush','Esoteric Flurry'],//2
  ['Striker','Death Blow','Specialization',' ','Cursed Doll','Master of Ambush','Grudge','Keen Blunt Weapon','Death Blow'],
  ['Wardancer','Esoteric Skill Enhancement','Swiftness','Specialization','Raid Captain','Adrenaline','Grudge','Keen Blunt Weapon','Esoteric Skill Enhancement'],
  ['Wardancer','First Intention','Swiftness',' ','Raid Captain','Keen Blunt Weapon','Grudge','Cursed Doll','First Intention'],
  ['Scrapper','Taijutsu','Crit',' ','Keen Blunt Weapon','Master of Ambush','Grudge','Cursed Doll','Taijutsu'],
  ['Scrapper','Shock Training',' ','Specialization','Adrenaline','Spirit Absorption','Grudge','Cursed Doll','Shock Training'],//2
  ['Soulfist','Robust Spirit','Specialization',' ','Grudge','Awakening','Cursed Doll','Precise Dagger','Robust Spirit'],
  ['Soulfist','Energy Overflow','Swiftness',' ','Grudge','Adrenaline','Keen Blunt Weapon','Cursed Doll','Energy Overflow'],
  ['Gunslinger','Peacemaker','Crit',' ','Hit Master','Adrenaline','Grudge','Keen Blunt Weapon','Peacemaker'],
  ['Gunslinger','Time to Hunt',' ','Swiftness','Keen Blunt Weapon','Grudge','Adrenaline','Cursed Doll','Time to Hunt'],//2
  ['Artillerist','Firepower Enhancement','Crit',' ','Grudge','Keen Blunt Weapon','Cursed Doll','Barricade','Firepower Enhancement'],
  ['Deadeye','Enhanced Weapon','Specialization',' ','Master of Ambush','Grudge','Adrenaline','Keen Blunt Weapon','Enhanced Weapon'],
  ['Deadeye','Pistoleer','Specialization',' ','Adrenaline','Precise Dagger','Grudge','Cursed Doll','Pistoleer'],
  ['Sharpshooter','Death Strike','Crit','Specialization','Grudge','Keen Blunt Weapon','Hit Master','Loyal Companion','Death Strike'],//2
  ['Sharpshooter','Loyal Companion','Swiftness',' ','Grudge','Hit Master','Raid Captain','Keen Blunt Weapon','Loyal Companion'],
  ['Bard','Desperate Salvation','Swiftness',' ','Awakening','Expert','Max MP Increase','Heavy Armor','Desperate Salvation'],
  ['Sorceress','Igniter','Specialization',' ','All-Out Attack','Precise Dagger','Grudge','Cursed Doll','Igniter'],
  ['Sorceress','Reflux','Crit',' ','Adrenaline','Precise Dagger','Grudge','Hit Master','Reflux'],
  ['Shadowhunter','Perfect Suppression','Crit',' ','Grudge','Cursed Doll','Master of Ambush','Keen Blunt Weapon','Perfect Suppression'],
  ['Shadowhunter','Demonic Impulse','Specialization',' ','Spirit Absorption','Grudge','Raid Captain','Cursed Doll','Demonic Impulse'],
  ['Deathblade','Surge','Specialization',' ','Master of Ambush','Grudge','Cursed Doll','Surge'],
  ['Deathblade','Remaining Energy','Specialization',' ','Super Charge','Master of Ambush','Grudge','Cursed Doll','Remaining Energy']

];


function ring (value1,value2,value3){
  console.log(value1,value2,value3);
  if( value2!==value3){
    for (var i = 0; i < 27; i++) {
      var counter1 = 0;
      for (var j = 2; j < 4; j++) {
        if (combatsring[i][j] == value1) {
          counter1 = counter1 + 1;
        }
        else{
          //console.log("no match1");
        }
      }  
      //console.log(counter1);
      if (counter1>0){
        var caunter2=0;
        for (var k = 3; k <9 ; k++) {
          if (combatsring[i][k] == value2 || combatsring[i][k] == value3){
            caunter2 = caunter2 + 1 ;
          }else{
          //console.log("no match1");
          }
        }
        //console.log(caunter2);
        if (caunter2==1){
          console.log("perfect combat stats and 1 engraving matched");
          console.log(combatsring[i]);
          var img=document.createElement("img");
          var image2 = new Image();
          img.src = urlist[i][2];
          img.id="imageclass";
          image2.src = urlist[i][3];
          image2.id = "image2";
          var block = document.getElementById("main__containerdevam4");
          block.appendChild(img);
          block.appendChild(image2);
          caunter2=0;
        }else if(caunter2==2){
          console.log("perfect combat stats and perfect engravings");
          console.log(combatsring[i]);
          var img=document.createElement("img");
          var image2 = new Image();
          img.src = urlist[i][2];
          img.id="imageclass";
          image2.src = urlist[i][3];
          image2.id = "image2";
          var block = document.getElementById("main__containerdevam4");
          block.appendChild(img);
          block.appendChild(image2);
          caunter2=0;
        }else if(caunter2==0){
          //console.log("good combat stats but no engravings matched")
        }
      

      }else{
        //console.log("no combat stats matched")
      }
     
    }
  }else{
    alert("Values cannot be equal");
  }  
}

document.getElementById("btn4").onclick = function() {
  ring(depo10[0],depo11[0],depo12[0]);
}
