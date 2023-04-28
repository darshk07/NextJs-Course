export default function handler(req, res) {
    if (req.method === 'POST') {
<<<<<<< HEAD
      // Process a POST request 
      let data = await fs.promises.readdir('contactdata');
      fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body))
      res.status(200).json(req)
    } else { 
      res.status(200).json(["allBlogs"]) 

=======
      // Process a POST request
    } else {
      // Handle any other HTTP method
      res.status(200).json(["allBlogs"])
>>>>>>> parent of 28a9ef1 (Tutorial 25)
    }
  }