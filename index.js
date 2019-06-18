const express = require('express');

const app = express();
const PORT = process.env.PORT ||3000;

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get(`/`, (request, response) => {
  response.send(`
    <div>
      <h1>Todo List</h1>
      <ul>
        <li style="text-decoration:line-through">Learn about Express routing</li>
        <li style="text-decoration:line-through">Create my own routes</li>
      </ul>
    </div>
  `);
});