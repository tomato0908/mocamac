// ニュースを表示するコンテナを取得
const newsContainer = document.getElementById('newslink');


// JSONファイルを読み込む
fetch('topic.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSONファイルの読み込みに失敗しました');

        }
        return response.json(); // JSONデータを解析
    })
    .then(data => {
        // ニュースデータをループしてHTMLに追加
      
        data.forEach(topic => {
            // ニュースを表示するHTMLを作成
            const topicItem = `
                <div>
                    <h3>${topic.date} - ${topic.title}</h3>
                    <p>${topic.content}</p>
                    <hr>
                </div>
            `;
            newsContainer.innerHTML += topicItem;
        });
       
    })
    .catch(error => {
        // エラー処理
        console.error('エラー:', error);
        newsContainer.innerHTML = '<p>ニュースを読み込めませんでした。</p>';
    });
