import Button from '../../components/buttons/Button'
import { Link } from 'react-router';
import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <section>
          <aside className="info_registration">
            <div className="wrapper">
              <h1>Stay updated!</h1>
              <p className='join_info'>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className="inner-wrapper">
                <div className="tick_text">
                  <li className="tick"><img src="/public/tick.png" alt="" /></li>
                  <p className="text">
                    Product discovery and building what matters
                  </p>
                </div>
                <div className="tick_text">
                  <li className="tick"><img src="/public/tick.png" alt="" /></li>
                  <p className="text">
                    Measuring to ensure updates are a success
                  </p>
                </div>
                <div className="tick_text">
                  <li className="tick"><img src="/public/tick.png" alt="" /></li>
                  <p className="text">And much more!</p>
                </div>
              </div>
              <div className='email_input'>
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" />
              </div>
              <Link to='/success'>
              <Button text='Subscribe to monthly newsletter'></Button>
              </Link>
            </div>
          </aside>
          <aside className="image">
            <img src="/public/image.svg" alt="" />
          </aside>
        </section>
      </main>
    </>
  );
}

export default Home;
