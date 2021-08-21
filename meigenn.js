let type = document.getElementById("type");

$("#btn").on("click", function(){

    let view = "";
    let name = ""
    let picture = "";
    let profile = "";

    let today = new Date();
    //swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);


    if (type.value === "ちょっと落ち込んでいる") {
        let r = Math.ceil(Math.random()*7);
        if (r === 1) {
            view = '俺は、絶対落ち込まないのよ。落ち込む人っていうのは、自分のこと過大評価しすぎやねん。過大評価しているから、うまくいかなくて落ち込むのよ。人間なんて、今日できたこと、やったことが全てやねん。'
            name = '<a href="https://ja.wikipedia.org/wiki/%E6%98%8E%E7%9F%B3%E5%AE%B6%E3%81%95%E3%82%93%E3%81%BE" target="balnk" style="text-decoration:none;color:#b99b00">明石家さんま</a>'
            $("#result__picture").attr('src', 'img/sanma.jpeg'); 
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);
        }
        if (r === 2) {
            view = '自分の姿をありのまま直視する、それは強さだ'
            name = '<a href="https://ja.wikipedia.org/wiki/%E5%B2%A1%E6%9C%AC%E5%A4%AA%E9%83%8E" target="balnk" style="text-decoration:none;color:#b99b00">岡本太郎</a>'
            $("#result__picture").attr('src', 'img/okamoto.jpeg');   
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);
        }
        if (r === 3) {
            view = '他人に花を持たせよう。自分に花の香りが残る。'
            name = '<a href="https://ja.wikipedia.org/wiki/%E6%96%8E%E8%97%A4%E8%8C%82%E5%A4%AA" target="balnk" style="text-decoration:none;color:#b99b00">斎藤茂太</a>'
            $("#result__picture").attr('src', 'img/saito.jpeg');      
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);
        }
        if (r === 4) {
            view = '希望があるところに人生もある。希望が新しい勇気をもたらし、そしてまた強くなる'
            name = '<a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%8D%E3%83%BB%E3%83%95%E3%83%A9%E3%83%B3%E3%82%AF" target="balnk" style="text-decoration:none;color:#b99b00">アンネ・フランク</a>'
            $("#result__picture").attr('src', 'img/annne.jpeg');      
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`); 
        }
        if (r === 5) {
            view = '失敗すればやり直せばいい。やり直してダメなら、もう一度工夫し、もう一度やり直せばいい'
            name = '<a href="https://ja.wikipedia.org/wiki/%E6%9D%BE%E4%B8%8B%E5%B9%B8%E4%B9%8B%E5%8A%A9" target="balnk" style="text-decoration:none;color:#b99b00">松下幸之助</a>'
            $("#result__picture").attr('src', 'img/matsushita.jpeg');    
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);  
        }
        if (r === 6) {
            view = '一つのドアが閉まっている時、もっとたくさんのドアが開いているんだよ'
            name = '<a href="https://ja.wikipedia.org/wiki/%E3%83%9C%E3%83%96%E3%83%BB%E3%83%9E%E3%83%BC%E3%83%AA%E3%83%BC" target="balnk" style="text-decoration:none;color:#b99b00">ボブ・マーリー</a>'
            $("#result__picture").attr('src', 'img/bob.jpeg');   
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);   
        }
        if (r === 7) {
            view = '人を信じよ、しかし、その百倍も自らを信じよ'
            name = '<a href="https://ja.wikipedia.org/wiki/%E6%89%8B%E5%A1%9A%E6%B2%BB%E8%99%AB" target="balnk" style="text-decoration:none;color:#b99b00">手塚治虫</a>'
            $("#result__picture").attr('src', 'img/tezuka.jpeg');   
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);   
        }
        $(".result__wrapper").show();
        $(".result__wrapper__img").show();
    } else if (type.value === "笑いたい") {
        let r = Math.ceil(Math.random()*5);
        if (r === 1) {
            view = 'だが断る…'
            name = '<a href="https://ja.wikipedia.org/wiki/%E5%B2%B8%E8%BE%BA%E9%9C%B2%E4%BC%B4" target="balnk" style="text-decoration:none;color:#b99b00">「ジョジョの奇妙な冒険」岸辺露伴</a>'
            $("#result__picture").attr('src', 'img/kishibe.jpeg');   
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);   
        }
         $(".result__wrapper").show();
         $(".result__wrapper__img").show();
    }　else if (type.value === "夢を叶えたい") {
        let r = Math.ceil(Math.random()*5);
        if (r === 1) {
            view = '立ち上がることは座っているのと同じくらい簡単なことだ'
            name = '<a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%AB%E3%82%BA%E3%83%BB%E3%83%AA%E3%83%B3%E3%83%89%E3%83%90%E3%83%BC%E3%82%B0" target="balnk" style="text-decoration:none;color:#b99b00">リンドバーグ</a>'
            $("#result__picture").attr('src', 'img/lind.jpeg');   
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);   
        }
        if (r === 2) {
            view = '成功も失敗も終わりではない。肝心なのは続ける勇気だ'
            name = '<a href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%B9%E3%83%88%E3%83%B3%E3%83%BB%E3%83%81%E3%83%A3%E3%83%BC%E3%83%81%E3%83%AB" target="balnk" style="text-decoration:none;color:#b99b00">ウィンストン・チャーチル</a>'
            $("#result__picture").attr('src', 'img/winston.jpeg'); 
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);
        }
        if (r === 3) {
            view = '宇宙行くの夢なんだろ、諦めんなよ。もし諦め切れるんなら、そんなもん夢じゃねえ'
            name = '<a href="https://koyamachuya.com/about-space-brothers/character/%E5%8D%97%E6%B3%A2-%E6%97%A5%E3%80%85%E4%BA%BA%EF%BC%88%E3%83%92%E3%83%93%E3%83%88%EF%BC%89/" target="balnk" style="text-decoration:none;color:#b99b00">「宇宙兄弟」南波日々人</a>'
            $("#result__picture").attr('src', 'img/hibito.png'); 
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);
        }
        if (r === 4) {
            view = '努力と情熱次第で、人はどんな高みにだって行ける'
            name = '<a href="https://ja.wikipedia.org/wiki/%E5%89%8D%E7%94%B0%E8%A3%95%E4%BA%8C" target="balnk" style="text-decoration:none;color:#b99b00">前田裕二</a>'
            $("#result__picture").attr('src', 'img/maeda.jpeg'); 
            swal(`${today.getMonth()+1}月${today.getDate()}日のメイゲンが出ました`);        
        }
        $(".result__wrapper").show();
        $(".result__wrapper__img").show();

    }　else if (type.value === "") {
        swal('気分を選択してください');
    }

    $("#result__mes").text(view);
    $("#result__who").html(name);

    $(".result__wrapper__who").css({
        'width':'100%',
        'font-size':'22px',
        'font-family':'Arial, Helvetica, sans-serif',
        'font-weight':'bold',
        'text-align':'center'
    });
});
