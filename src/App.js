
import './App.css';
import { MyPlans } from './MyPlans';
import books from './book.png'
import photo from './photo2.png'


function App() {
  return (
    <div className='App'>

<div className='container'>
  <img src={books} width='300px' alt='book'/>
</div>

<div className='container'>
 <h1> List to Do</h1>
</div>
<MyPlans />
<div className='container'>
<img src={photo} width='300px' alt='book' />
</div>

    </div>
  )
}

export default App;
