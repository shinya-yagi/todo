//タスク新規作成
$('#save').on('click', function() {
    $.ajax({
      url: 'https://samurai-yagi-todoapi.herokuapp.com/tasks',
      method: 'POST',
        data: {
        "title": $('#title').val(),
        "description": $('#description').val(),
        "priority": $('select').val(),
        }
    });
  });

//タスク一覧を取得
$(function(){
  $.ajax({
      type : 'GET',
      url : 'https://samurai-yagi-todoapi.herokuapp.com/tasks',
  }).done(function(data){
      if (data.tasks) {
        setData(data); 
      } else {
        alert('該当するデータが見つかりませんでした');
      }
    }).fail(function(data) {
      alert('通信に失敗しました');
    });


  // データ取得が成功したときの処理（タスク一覧の取得）
  function setData(data) {
    //タスク一覧を表示するHTMLを作る
    let html = '';
    for (let i = 0; i < data.tasks.length; i++) {
      // html という変数に画面に表示したい HTML タグを追加していく。
      html += '<tr>';
      html += '<td  class="left"><a href="update.html?id=' + data.tasks[i].id + '">' + data.tasks[i].title + '</a></td>';
      html += '<td class="right">' + data.tasks[i].priority + '</td>';
      html += '</tr>';
      
    $('#resultTable').html(html);
    
     }
    }
});