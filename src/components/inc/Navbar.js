import logo from '../images/logo.png'; 
import '../asserts/media/App.css'; 
function Navbar(){
    return(
        
        <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img className= 'logo'src={logo} alt="Hsenid" />
    </a>
  </div>
</nav>


    );
}
export default Navbar;



