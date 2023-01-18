import './App.css'
import Product from './components/Product/Product'

import catImage from './Image/cat.png'

function App() {

  const dbData = [
    {
      id: 1,
      title: 'нямушка',
      flavour: 'с фуа-гра',
      description: 'Печень утки разварная с артишоками.',
      packageDescription: 'Сказочное заморское яство',
      amount: 100,
      servingsPerPackage: 10,
      bonuses: { mouse: 1 },
      weight: 0.5,
      image: catImage,
    }, {
      id: 2,
      title: 'нямушка',
      flavour: 'с рыбой',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      packageDescription: 'Сказочное заморское яство',
      amount: 5,
      servingsPerPackage: 40,
      bonuses: { mouse: 2 },
      weight: 2,
      image: catImage,
    }, {
      id: 3,
      title: 'нямушка',
      flavour: 'с курой',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      packageDescription: 'Сказочное заморское яство',
      amount: 0,
      servingsPerPackage: 100,
      bonuses: { mouse: 5, customer: 'заказчик доволен' },
      weight: 5,
      image: catImage,
    },
  ]

  return (
    <div className="app">
      <div className='container'>
          <h1>Ты сегодня покоромил кота?</h1>
          <div className='products'>
            {dbData.map(product => <Product key={product.id} data={product} />)}
          </div>
      </div>
    </div>
  )
}

export default App
