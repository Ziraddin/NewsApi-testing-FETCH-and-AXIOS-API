import './App.css';
import News from './News/News';

function App() {

 const news = [

  {
    type: "everything" ,
    query: "domains=wsj.com"
  },
  {
    type: "top-headlines" ,
    query: "country=us&category=business"
  }
 ]

  return (
    <div className="App">
       {news.map((item)=>{
         return <News type={item.type} query={item.query} />
       })}
    </div>
  );
}

export default App;
