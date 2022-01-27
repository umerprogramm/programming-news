import express from 'express';
import axios from "axios";
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://reddit-coder-news.p.rapidapi.com/newsfeed',
        headers: {
          'x-rapidapi-host': 'reddit-coder-news.p.rapidapi.com',
          'x-rapidapi-key': '5057813bc5mshf5185e29384ee04p11c105jsna35f6923a250'
        }
      };
      
      axios.request(options).then(function (response) {
          res.send(response.data);
      }).catch(function (error) {
          console.error(error);
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})