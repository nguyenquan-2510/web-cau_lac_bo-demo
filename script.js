
// Tricks

// This will be triggered when u click the copyright line
const COPYRIGHT = document.getElementById("copyright")
let switch_cond = true
let text = ""

COPYRIGHT.onclick = () => {
  switch_cond = !switch_cond
  if (switch_cond) {
    text = "Copyright \u00a9 by Nqzz_kagari ( 2026 \u2192 \u221e )"
  }
  else {
    text = "Why did you click this line ?"
  }
  COPYRIGHT.textContent = text
  // window.alert("M gay dung k?")
}

// When u click the ... row of the schedule table
const etc = document.getElementById("etc")
etc.onclick = () => {
  // window.alert("Thang dev hoi nhac nen de v =)")
}

