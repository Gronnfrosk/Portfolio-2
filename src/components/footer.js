import Image from 'react-bootstrap/Image';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {

return <footer>
<a
  href="https://github.com/Gronnfrosk"
  title="My GitHub profile"
  class="text-decoration-none"
>
  <FaGithub />
   
</a>
<Image src="./images/green-frog.js"/>
<a
  href="https://www.linkedin.com/in/hanna-fjeldsaa-0b4797127/"
  title="My LinkedIn profile"
  class="text-decoration-none"
>
  <FaLinkedin />
</a>
</footer>
}