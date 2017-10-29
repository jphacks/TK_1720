<template>
  <div class="lp">
    <img class="logo" src="../assets/loverduck_logo.svg" />
    <h1>大切な人の、大切な時間と命を見守る。</h1>
    <p>
      現在、日本では入浴中の溺死者数が年間5000人にも上り、
      <br>
      交通事故の死亡者数よりも多くなっています。
      <br>
      ですが、高齢の親御さんや義父母さんでも自分のお風呂の時間を見張られるのは嫌がることでしょう。
      <br>
      「LOVER DUCK」はお風呂に浮かべるだけで入浴中の溺死を防ぐ家族の安心ツールです。
    </p>
    <a href="/signup">登録はこちら</a>
  </div>
</template>
<script>
</script>
<style scoped>
.lp {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 130vh;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-attachment: fixed;
}

.logo {
  margin: 5% 40%;
  width: 20%;
}

h1, p, a {
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px 100px orange 0.5;
}

a {
  background-color: white;
  border-radius: 4px;
  color: orange;
  display: block;
  margin: 60px auto;
  padding: 10px 40px;
  text-decoration: none;
  width: 200px;
}
</style>
