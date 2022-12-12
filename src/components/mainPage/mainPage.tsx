import { Link } from 'react-router-dom';
import './mainPage.scss';


export const MainPage = () => {
  return (
    <main>
      <div className='main'>
        <div>

          {/* <div className='main__firstColumn'>
          <a href="https://costel.md/" rel="smartphone"><img src='/assets/smartphone.jpg' style={{ width: "340px", height: "155px" }} /></a>
          <a href="https://costel.md/" rel="laptopuri"><img src='/assets/laptopuri.jpg' style={{ width: "340px", height: "155px" }} /></a>
          <a href="https://costel.md/" rel="tablete"><img src='/assets/tablete.jpg' style={{ width: "340px", height: "155px" }} /></a>
        </div>

        <div className='main__secondColumn'>
          <a href="https://costel.md/" rel="oferte"><img src='/assets/oferte.jpg' style={{ width: "340px", height: "155px" }} /></a>
          <a href="https://costel.md/" rel="gadjet"><img src='/assets/gadjet.jpg' style={{ width: "340px", height: "155px" }} /></a>
          <a href="https://costel.md/" rel="electrocasnice"><img src='/assets/electrocasnice.jpg' style={{ width: "340px", height: "155px" }} /></a>
        </div> */}
          <div className='main__categories'>
            <div><Link to="/smartfoane" rel="smartphone"><img src='/assets/smartphone.jpg' style={{ width: "340px", height: "155px" }} /></Link></div>
            <div><Link to="/laptopuri" rel="laptopuri"><img src='/assets/laptopuri.jpg' style={{ width: "340px", height: "155px" }} /></Link></div>
            <div><Link to="/tablete" rel="tablete"><img src='/assets/tablete.jpg' style={{ width: "340px", height: "155px" }} /></Link></div>
            <div><Link to="/" rel="oferte"><img src='/assets/oferte.jpg' style={{ width: "340px", height: "155px" }} /></Link></div>
            <div><Link to="/gadjeturi" rel="gadjet"><img src='/assets/gadjet.jpg' style={{ width: "340px", height: "155px" }} /></Link></div>
            <div><Link to="/electrocasnice" rel="electrocasnice"><img src='/assets/electrocasnice.jpg' style={{ width: "340px", height: "155px" }} /></Link></div>
          </div>
        </div>
        <div className='main__square'>
          <h1>Aici poate fi publicitatea ta</h1>
        </div>
      </div>
    </main>
  )
}