function successCopy(clickedDiv) {
  // Get the first and second SVG elements within the clicked div
  var firstSvg = clickedDiv.querySelector("svg:first-child");
  var secondSvg = clickedDiv.querySelector("svg:nth-child(2)");
  // Toggle visibility by swapping display values
  firstSvg.style.display = "none";
  secondSvg.style.display = "block";
  setTimeout(() => {
    firstSvg.style.display = "block";
    secondSvg.style.display = "none";
  }, 2000);
}

var clipboard = new ClipboardJS(".clipboard-container");
clipboard.on("success", function (e) {
  successCopy(e.trigger);
});

function showEmail() {
  var paragraph = document.getElementById("dtyg");
  paragraph.innerHTML = paragraph.innerHTML.split("").reverse().join("");
}

function toSucieuNumeric(input) {
  const inputString = input.toString();
  const sucieuNumerals = [
    "〇",
    "〡",
    "〢",
    "〣",
    "〤",
    "〥",
    "〦",
    "〧",
    "〨",
    "〩",
  ];
  const chineseNumerals = ["零", "一", "二", "三"];
  let sucieuString = "";
  var isOneTwoThree = false;
  for (let i = 0; i < inputString.length; i++) {
    const digit = parseInt(inputString[i], 10);
    if (!isNaN(digit)) {
      if (digit >= 1 && digit <= 3) {
        if (isOneTwoThree) {
          sucieuString += chineseNumerals[digit];
          isOneTwoThree = false;
        } else {
          sucieuString += sucieuNumerals[digit];
          isOneTwoThree = true;
        }
      } else {
        sucieuString += sucieuNumerals[digit];
        isOneTwoThree = false;
      }
    } else {
      sucieuString += inputString[i];
      var isOneTwoThree = false;
    }
  }
  return sucieuString;
}

const repoOwner = "saeziae";
const repoName = "rime_nguphing";

// Function to fetch repository information
async function getRepoInfo() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch repository information: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to print stargazers and last push date

async function printgithubstatus() {
  const repoInfo = await getRepoInfo();
  if (repoInfo) {
    const date = new Date(repoInfo.pushed_at);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // months are zero-based
    const day = date.getDate();
    var githubstatus = document.getElementById("githubstatus");
    githubstatus.innerHTML = toSucieuNumeric(
      `<a href="https://github.com/${repoOwner}/${repoName}">項目</a>畀
      <span class="scn">${repoInfo.stargazers_count}</span>个人歡喜<br>扗<span class="scn">${year}</span>年<span class="scn">${month}</span>月<span class="scn">${day}</span>號剛巧更新`
    );
    githubstatus.style.display = "block";
  }
}

// Function to activate tab based on User Agent
function activateTabBasedOnUA() {
  const triggerTabList = document.querySelectorAll("#pills-tab button");
  triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      tabTrigger.show();
    });
  });

  var userAgent = navigator.userAgent.toLowerCase();

  function showTab(tabId) {
    var tab = document.querySelector("#installInstruction-" + tabId + "-tab");
    bootstrap.Tab.getInstance(tab).show();
  }

  if (userAgent.includes("windows")) {
    showTab("weasel");
  } else if (userAgent.includes("macintosh") || userAgent.includes("mac os")) {
    showTab("squerrel");
  } else if (userAgent.includes("android")) {
    showTab("trime");
  } else if (userAgent.includes("linux")) {
    showTab("fcitx5");
  } else if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod")
  ) {
    showTab("hamster");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showEmail();
  activateTabBasedOnUA();
  printgithubstatus();
});
