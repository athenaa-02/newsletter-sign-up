import Button from '../../components/buttons/Button'
import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <section>
          <aside className="info_registration">
            <div className="wrapper">
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className="inner-wrapper">
                <div className="tick_text">
                  <li className="tick"></li>
                  <p className="text">
                    Product discovery and building what matters
                  </p>
                </div>
                <div className="tick_text">
                  <li className="tick"></li>
                  <p className="text">
                    Measuring to ensure updates are a success
                  </p>
                </div>
                <div className="tick_text">
                  <li className="tick"></li>
                  <p className="text">And much more!</p>
                </div>
              </div>
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" />
              <Button></Button>
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
