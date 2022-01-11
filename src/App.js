import image from './clipart-beach-signage-15.png';
import './App.css';

function App() {
  return (
      <div>
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
          <h1 className="title red">testing</h1>
          <br />
          <img src="/Edison-Marquee-Number---1.jpg"  width="200px" />
          <br />
          <img src={image} width="200px" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;

