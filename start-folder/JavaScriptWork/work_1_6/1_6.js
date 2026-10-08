// コーヒーを作る関数
function makeCoffee() {
    return new Promise((resolve) => {
        console.log("スタッフ：先にコーヒーを準備します...");
        setTimeout(() => {
          console.log("コーヒーができました！");
          resolve();
        }, 2000); // 2秒
    });
}

// サンドイッチを作る関数
function makeSandwich() {
    return new Promise((resolve) => {
        console.log("スタッフ：次にサンドイッチを準備します...");
        setTimeout(() => {
            console.log("サンドイッチができました！");
            resolve();
        }, 3000); // 3秒
    });
}

// 並列を作って、終わったら配膳
async function serveCustomer() {
    await Promise.all([makeCoffee(),makeSandwich()]);
    console.log("スタッフ：すべてできたので配膳します！");
}

console.log("お客さんがコーヒーとサンドイッチを注文しました");
serveCustomer();