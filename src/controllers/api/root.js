module.exports = (request, response) => {
  const page = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>API</title>
    </head>
    <body>
      <h1>API works!</h1>
    </body>
    </html>
  `;
  response.status(200);
  response.send(page);
};
