const inputInterface = [
  [""],
  [
    ["", "n"],
    ["尔", "ni"],
    ["我", "ngou"],
    ["伲", "ni"],
    ["人", "nin"],
    ["兒", "ng"],
  ],
  ["ng", ["兒", "n̄g"], ["尔", "ǹg"], ["五", "ǹg"], ["魚", "n̄g"], ["吳", "n̄g"]],
  [
    ["", "ngo"],
    ["雅", "ngò"],
    ["牙", "ngō"],
    ["瓦", "ngò"],
    ["芽", "ngō"],
    ["訝", "ngó"],
  ],
  [
    ["", "ngou"],
    ["我", "ngòu"],
    ["餓", "ngóu"],
    ["俄", "ngōu"],
    ["鵝", "ngōu"],
    ["臥", "ngóu"],
  ],
  [
    ["", "ngou n"],
    ["我伲", "ngòu nī"],
    ["我能", "ngòu nēng"],
    ["我願", "ngòu ngióe"],
    ["俄語", "ngōu ngèi"],
    ["我念", "ngòu niáe"],
  ],
  [
    ["", "ngou ni"],
    ["我伲", "ngòu nī"],
    ["俄而", ""],
    ["俄爾", ""],
    ["我呢", ""],
    ["我", "ngòu"],
  ],
  ["我伲"],

  [
    ["我伲", "z"],
    ["是", "zỳ"],
    ["就", "ziéu"],
    ["着", "jiak"],
    ["字", "zý"],
    ["上", "zhiàng"],
  ],
  [
    ["我伲", "zy"],
    ["是", "zỳ"],
    ["字", "zý"],
    ["士", "zỳ"],
    ["詞", "zȳ"],
    ["事", "zý"],
  ],
  [
    ["我伲", "zy k"],
    ["自家", "zý kō"],
    ["詞庫", "zȳ khú"],
    ["自己", "zý kì"],
    ["是個", "zỳ kóu"],
    ["除去", "dzȳ khí"],
  ],
  [
    ["我伲", "zy ko"],
    ["自家", "zý kō"],
    ["自駕", "zý kó"],
    ["是假", "zỳ kó"],
    ["事假", "zý kò"],
    ["是價", "zỳ kó"],
  ],
  [
    ["我伲", "zy kok"],
    ["自覺", "zý kok"],
    ["自各", "zý kok"],
    ["是", "zỳ"],
    ["字", "zý"],
    ["士", "zỳ"],
  ],
  [
    ["我伲", "zy ko ke"],
    ["自家感", "zý kō kè"],
    ["自覺", "zý kok"],
    ["自各", "zý kok"],
    ["自家", "zý kō"],
    ["自駕", "zý kó"],
  ],
  [
    ["我伲", "zy ko keh"],
    ["自家个", "zý kō keh"],
    ["自覺", "zý kok"],
    ["自各", "zý kok"],
    ["自家", "zý kō"],
    ["自駕", "zý kó"],
  ],
  ["我伲自家个"],

  [
    ["我伲自家个", "g"],
    ["佢", "gēi"],
    ["也", "ghà"],
    ["下", "ghò"],
    ["共", "giúng"],
    ["後", "ghèu"],
  ],
  [
    ["我伲自家个", "gh"],
    ["也", "ghà"],
    ["下", "ghò"],
    ["後", "ghèu"],
    ["河", "ghōu"],
    ["學", "ghok"],
  ],
  [
    ["我伲自家个", "gha"],
    ["也", "ghà"],
    ["啊", "ghá"],
    ["何", "ghā"],
    ["鞋", "ghā"],
    ["械", "ghá"],
  ],
  [
    ["我伲自家个", "ghae"],
    ["閑", "ghāe"],
    ["限", "ghàe"],
    ["函", "ghāe"],
    ["鹹", "ghāe"],
    ["餡", "gháe"],
  ],
  [
    ["我伲自家个", "ghae w"],
    ["閑話", "ghāe wó"],
    ["限位", "ghàe wéi"],
    ["限爲", "ghàe wéi"],
    ["閑混", "ghāe wèn"],
    ["鹹湖", "ghāe wū"],
  ],
  [
    ["我伲自家个", "ghae wo"],
    ["閑話", "ghāe wó"],
    ["閑", "ghāe"],
    ["限", "ghàe"],
    ["函", "ghāe"],
    ["鹹", "ghāe"],
  ],
  ["我伲自家个閑話"],
  ["我伲自家个閑話，"],
  [
    ["我伲自家个閑話，", "s"],
    ["生", "sāng"],
    ["寫", "sià"],
    ["書", "shiū"],
    ["啥", "sā"],
    ["細", "sí"],
  ],
  [
    ["我伲自家个閑話，", "si"],
    ["細", "sí"],
    ["些", "sī"],
    ["西", "sī"],
    ["洗", "sì"],
    ["絮", "sí"],
  ],
  [
    ["我伲自家个閑話，", "sia"],
    ["寫", "sià"],
    ["些", "siā"],
    ["瀉", "siá"],
    ["卸", "siá"],
    ["細", "sí"],
  ],
  ["我伲自家个閑話，寫"],

  [
    ["我伲自家个閑話，寫", "l"],
    ["了", "liàu"],
    ["落", "lok"],
    ["來", "lāi"],
    ["裏", "lì"],
    ["扗", "leh"],
  ],
  [
    ["我伲自家个閑話，寫", "lo"],
    ["李安", "lì ōe"],
    ["立案", "lih óe"],
    ["臨安", "līn ōe"],
    ["裏屋", "lì uk"],
    ["老屋", "làu uk"],
  ],
  [
    ["我伲自家个閑話，寫", "lok"],
    ["落", "lok"],
    ["絡", "lok"],
    ["六", "luk"],
    ["樂", "lok"],
    ["綠", "luk"],
  ],
  ["我伲自家个閑話，寫落"],

  [
    ["我伲自家个閑話，寫落", "l"],
    ["落", "lok"],
    ["了", "liàu"],
    ["來", "lāi"],
    ["裏", "lì"],
    ["扗", "leh"],
  ],
  [
    ["我伲自家个閑話，寫落", "la"],
    ["拉", "lhā"],
    ["賴", "lá"],
    ["啦", "lhā"],
    ["瀨", "lá"],
    ["癩", "lá"],
  ],
  [
    ["我伲自家个閑話，寫落", "lai"],
    ["來", "lāi"],
    ["在", "lài"],
    ["萊", "lāi"],
    ["淶", "lāi"],
    ["徠", "lāi"],
  ],
  ["我伲自家个閑話，寫落來"],
  ["我伲自家个閑話，寫落來！"],
];

function updateInputContent(counter) {
  var inputDemo = document.getElementById("inputDemo-text");
  var cell = inputInterface[counter];
  if (cell[1]) {
    for (let i = 1; i < 6; i++) {
      document.getElementById("inputDemo-cand").style.visibility = "visible";
      var inputCandChi = document.getElementById("inputDemo-cand" + i + "-chi");
      var inputCandRom = document.getElementById("inputDemo-cand" + i + "-rom");
      inputCandChi.innerHTML = cell[i][0];
      inputCandRom.innerHTML = cell[i][1];
      inputDemo.innerHTML =
        cell[0][0] + '<u class="dotted">' + cell[0][1] + "</u>";
    }
  } else {
    document.getElementById("inputDemo-cand").style.visibility = "hidden";
    var inputDemoFloat = document.getElementById("inputDemo-text-float");
    inputDemo.innerHTML = cell[0];
    inputDemoFloat.innerHTML = cell[0];
  }
}
function inputLoop(i) {
  setTimeout(function () {
    updateInputContent(inputInterface.length - i);
    if (--i) inputLoop(i);
  }, 150);
}

inputLoop(inputInterface.length);

setInterval(() => {
  inputLoop(inputInterface.length);
}, inputInterface.length * 300);
