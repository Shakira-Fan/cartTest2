function print_value() {
  let option_name = document.getElementById("item_from").value;
  let imgChange = document.getElementById("img");

  if (option_name === "Sarlisi") {
    imgChange.innerHTML = `<div id="img" style="display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;margin:0 auto;width:500px">
        <img class="col-3 bg-light p-3 border" src="https://i3.momoshop.com.tw/1619331034/goodsimg/0006/769/334/6769334_R.webp"  width="500px" alt="purse">
        <h3>名稱:【Sarlisi】夏麗絲夏季女包高級感小眾包包百搭斜背馬鞍包鏈帶包大號（小包款）</h3>
    </div>`;
  } else {
    imgChange.innerHTML = `<div id="img">
        <img class="col-3 bg-light p-3 border" src="https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/6335786/0/637750385469270000?v=1" style="backgrond-color:blue" width="500px" alt="purse">
        <h3>名稱:VEMAR極簡時尚經典磚塊小方包(奶茶可可)</h3>
    </div>`;
  }
  console.log(option_name);
  console.log(imgChange);
}
