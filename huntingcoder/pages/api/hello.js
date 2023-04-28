// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

<<<<<<< HEAD
export default async function handler(req, res) {
<<<<<<< HEAD
=======

>>>>>>> parent of 8f9a2d0 (Tutorial 29)
    let data = await fs.promises.readdir("blogdata");
    let myfile; 
    let allBlogs = [];
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
          console.log(item)
          myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8') 
          allBlogs.push(JSON.parse(myfile))
      }
    res.status(200).json(allBlogs)
=======
export default function handler(req, res) {
<<<<<<< HEAD
<<<<<<< HEAD:huntingcoder/pages/api/blogs.js
  fs.readdir("blogdata", (err, data)=>{
    console.log(data)
    res.status(200).json(data)
  })
>>>>>>> parent of ea45bda (Tutorial 19)
=======
  // console.log(res)
  res.status(200).json({ name: 'Harry Bhai' })
>>>>>>> parent of 0872553 (Tutorial 18):huntingcoder/pages/api/hello.js
=======
  res.status(200).json({ name: 'John Doe' })
>>>>>>> parent of 87af461 (Tutorial 17)
}
