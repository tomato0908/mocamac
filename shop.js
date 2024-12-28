const items = document.getElementById("items");

// JSONファイルを読み込む
fetch('news.json')
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
                <div>
                    <h3>${news.date} - ${news.title}</h3>
                    <p>${news.content}</p>
                    <hr>
                </div>
            `;
            items.innerHTML += newsItem;
        });
       
    })
    .catch(error => {
        // エラー処理
        console.error('エラー:', error);
        items.innerHTML = '<p>ニュースを読み込めませんでした。</p>';
    });
