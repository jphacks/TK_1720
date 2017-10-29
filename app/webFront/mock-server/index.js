var express = require('express');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/api/auth/signup', function (req, res) {
  res.send({
	data: {
		access_token: "hafiosdakfbsdklxanl"
	}
});
});

app.post('/api/auth/signin', function (req, res) {
  res.send({
	data: {
		access_token: "hafiosdakfbsdklxanl"
	}
});
});

app.post('/api/auth/password/edit', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/api/auth/profile/edit', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/api/auth/profile', function (req, res) {
  res.send({
	data: {
      "mail": "hoge@gmail.com",
      "name": "kanshiho",
      "tel": "09000000000"
	}
});
});

app.post('/api/duck/create', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/api/duck/register', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/api/duck/list', function (req, res) {
  res.send({
	data: {
		ducks: [
			{
				name: "祖父duck",
				status: true,
				id: 1
			},
			{
				name: "祖母duck",
				status: false,
				id: 2
			}
		]
	}
});
});

app.post('/api/duck/detail', function (req, res) {
  res.send({
	data: {
		name: "祖父ダック",
		status: true,
		duck_id: 1,
		postal_code: "1560042",
		address: "渋谷区松濤1-17-3"
	}
});
});

app.post('/api/duck/dailylog', function (req, res) {
  res.send({
	data: {
		daily_log: [
			{
				started_at: "2017/10/28/23:11:11",
				ended_at: "2017/10/28/23:11:11"
			},
			{
				started_at: "2017/10/28/23:11:11",
				ended_at: "2017/10/28/23:11:11"
			}
		]
	}
});
});

app.post('/api/duck/alertlog', function (req, res) {
  res.send({
	data: {
		alert: [
			{
				called_at: "2017/10/28/23:11:11",
				alert_id: 1,
				status: 2
			},
			{
				called_at: "2017/10/28/23:11:11",
				alert_id: 2,
				status: 1
			}
		]
	}
});
});

app.post('/api/duck/alertlog/update', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/api/duck/reactionlog', function (req, res) {
  res.send({
	data: {
		status: 1,
		reacted_user: [
			"父",
			"母",
			"娘"
		]
	}
});
});

app.listen(3000, function () {
  console.log('dev server listening on port 3000!');
});
