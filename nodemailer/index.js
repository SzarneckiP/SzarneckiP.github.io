const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", async (req, res) => {
	let { text } = req.body
	const transport = nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		port: 2525,
		auth: {
			user: "3b138d86f8776d",
			pass: "847e8fffe61f4a"
		}
	})

	await transport.sendMail({
		from: "siarniuk@gmail.com",
		to: "test@test.com",
		subject: "test email",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, Darwin</p>
         </div>
    `
	})
})

app.listen(
	(process.env.PORT || 4000,
		() => {
			console.log("Server is listening on port 4000")
		})
)
