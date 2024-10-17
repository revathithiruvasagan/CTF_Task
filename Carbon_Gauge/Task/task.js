let familyMembers = [];
let currentIndex = null;

document.getElementById("familyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const education = document.getElementById("education").value;
  const task = document.getElementById("task").value;
  const grocery = document.getElementById("grocery").value;

  const member = { name, gender, education, task, grocery };

  if (currentIndex !== null) {
    familyMembers[currentIndex] = member;
    currentIndex = null;
  } else {
    familyMembers.push(member);
  }

  document.getElementById("familyForm").reset();
  displayFamilyList();
});

function displayFamilyList() {
  const familyList = document.getElementById("familyList");
  familyList.innerHTML = "";

  familyMembers.forEach((member, index) => {
    const memberDiv = document.createElement("div");
    memberDiv.innerText = member.name;
    memberDiv.style.cursor = "pointer";

    memberDiv.addEventListener("click", () => {
      displayProfileCard(index);
    });

    familyList.appendChild(memberDiv);
  });
}

function displayProfileCard(index) {
  const member = familyMembers[index];

  document.getElementById("profileCard").style.display = "block";
  document.getElementById("profileName").innerText = "Name: " + member.name;
  document.getElementById("profileGender").innerText =
    "Gender: " + member.gender;
  document.getElementById("profileEducation").innerText =
    "Education: " + member.education;
  document.getElementById("profileTask").innerText = "Task: " + member.task;
  document.getElementById("profileGrocery").innerText =
    "Grocery Items: " + member.grocery;

  document.getElementById("editMember").onclick = () => editMember(index);
  document.getElementById("deleteMember").onclick = () => deleteMember(index);
}

function editMember(index) {
  const member = familyMembers[index];

  document.getElementById("name").value = member.name;
  document.getElementById("gender").value = member.gender;
  document.getElementById("education").value = member.education;
  document.getElementById("task").value = member.task;
  document.getElementById("grocery").value = member.grocery;

  currentIndex = index;
}

function deleteMember(index) {
  familyMembers.splice(index, 1);
  displayFamilyList();
  document.getElementById("profileCard").style.display = "none";
}
