const items = document.getElementById("items");
let count = 1;

// JSONファイルを読み込む
fetch('https://tomato0908.github.io/mocamac/shop.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSONファイルの読み込みに失敗しました');

        }
        return response.json(); // JSONデータを解析
    })
    
    


    .then(data => {
        // ニュースデータをループしてHTMLに追加
        console.log(data.length);
        
        data.forEach(shop => {
            // ニュースを表示するHTMLを作成

            const newsItem = `
        <table id="shoptable" class="shoptable">
            <tr>
                <th>${shop.title}</th>
            </tr>
            <tr>
                <td><img clas="img" srs="${shop.image}"</td>
            </tr>
            <tr>
                <td>${shop.price}</td>
            </tr>
        </table>
            `;
            items.innerHTML += newsItem;
            console.log(count+"表示中");
            if(count%2==0) {
                console.log(count);
                let div01 = document.createElement('div');
            }
            count++;
        });

       
    })
    .catch(error => {
        // エラー処理
        console.error('エラー:', error);
        items.innerHTML = '<p>ニュースを読み込めませんでした。</p>';
    });
