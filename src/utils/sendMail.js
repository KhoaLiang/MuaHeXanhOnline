'use strict'

const nodemailer = require('nodemailer')

const sendMail = (gmail, url, fullname, expiresIn) => {
    const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.USER_GMAIL,
			pass: process.env.APP_PASSWORD,
		},
	})

    console.log(`gmail`, gmail)

    const mailOptions = {
        from: process.env.USER_GMAIL,
        to: gmail,
        subject: 'Yêu cầu khôi phục mật khẩu từ Green Summer Online System',
        html: `
        <div style="max-width:500px; margin:0 auto; overflow:hidden;">
            <h3 style="text-align:center; font-weight: bolder; color:black; font-size:30px ">GREEN SUMMER</h3>
            <div style="padding:10px;">
                <p style="font-weight: 700;">Xin chào ${fullname}!</p>
                <p style="font-size:14px;">Gần đây đã có người yêu cầu đặt lại mật khẩu cho tài khoản của bạn</p>
                <div style="text-align:center; margin-top:2rem">
                    <a href="${url}"
                        style="background-color: black; padding: 0.5rem 1rem; border-radius: 0.3rem; text-decoration: none; font-weight: 300; color:beige">Đặt
                        lại
                        mật
                        khẩu</a> 
                </div>
                <p>Liên kết này sẽ hết hạn sau ${expiresIn} phút</p>
                <br />
                <p style="font-weight:700;">Bạn đã không yêu cầu thay đổi này?</p>
                <span>Nếu bạn đã không yêu cầu mật khẩu mới, hãy bỏ qua email này</span>
                
            </div>
            <br />
            <br />
            <br />
            <div style="border-top: 1px solid #ccc; text-align: center; padding-top:0.5rem; width: 100%;">
                <p>@2023 GREENSUMMER</p>
                <span>Bài tập lớn Công nghệ phần mềm nâng cao</span>
                <br />
                <span>Green Summer Team</span>
            </div>
        </div>
       `,
    }
    console.log('mailOptions', mailOptions)

    transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
            console.log("Error sending message: ", err)
		} else {
            console.log('Email sent: ', data.response)
        }
	})
}   

module.exports = sendMail