const items = document.getElementById("items");

// JSONファイルを読み込む
fetch('https://tomato0908.github.io/mocamac/news.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSONファイルの読み込みに失敗しました');

        }
        return response.json(); // JSONデータを解析
    })


    .then(data => {
        // ニュースデータをループしてHTMLに追加
      
        data.forEach(news => {
            // ニュースを表示するHTMLを作成
            const newsItem = `
        <table id="shoptable" class="shoptable">
            <tr>
                <th>商品名</th>
            </tr>
            <tr>
                <td><img src="image01.jpg" class="img"></td>
            </tr>
            <tr>
                <td>値段</td>
            </tr>
        </table>
            `;
            items.innerHTML += newsItem;
        });
       
    })
    .catch(error => {
        // エラー処理
        console.error('エラー:', error);
        items.innerHTML = '<p>ニュースを読み込めませんでした。</p>';
    });
