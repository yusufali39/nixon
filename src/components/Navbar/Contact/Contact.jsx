import "./contact.css"
export default function Contact(){
    return (
        <>
        <form action="https://getform.io/f/7b57f664-dcee-479d-95a3-231f40101b84" method="POST">      
        <h2 className="contact-name">Contact Us</h2>
        <input name="name" type="text" className="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SEND"/>
        <div className="mail"><p>help?</p>
            <a href="mailto:yusufali7284@gmail.com?subject=RegardingNixon&body=HeyNixon">mail us</a></div>
        </form>
        </>
    )
};