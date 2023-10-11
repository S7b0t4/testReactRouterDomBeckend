import Express from "express"

const app = Express()
const port = 5000
import cors from "cors";
const corsOrigin ={
    origin:'http://localhost:3000',
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));


const arr = [
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png",
		link: "1",
		description:"Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem,"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png",
		link: "2",
		description:"Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem,"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png",
		link: "3",
		description:"Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem,"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png",
		link: "4",
		description:"Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem,"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png",
		link: "5",
		description:"Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem,"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png",
		link: "6",
		description:"Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem, Lorem, lorem lorem lorem,"
	},
]

app.get('/', (req, res) => {
	res.set("Access-Control-Allow-Origin", "*")
  res.send(arr)
})
app.get('/:id', function(req, res) {
	res.set("Access-Control-Allow-Origin", "*")
	const id = req.params.id;
	const obj = arr.find(obj => obj.link === id)
	res.send(obj)
 
 });
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})