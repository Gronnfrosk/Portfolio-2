//import Image from 'react-bootstrap/Image';
import { FaGithub, FaLinkedin } from "react-icons/fa";
//import Card from 'react-bootstrap/Card';

export default function Footer() {

return <footer className="mx-auto">
<a
  href="https://github.com/Gronnfrosk"
  title="My GitHub profile"
  className="text-decoration-none"
>
  <FaGithub />
</a>
<img alt="Frog that is green and smiling" src="./images/frogicon.PNG" height="40px"
        className="mx-4 rounded-5"/>
<a
  href="https://www.linkedin.com/in/hanna-fjeldsaa-0b4797127/"
  title="My LinkedIn profile"
  className="text-decoration-none"
>
  <FaLinkedin />
</a>
</footer>
}