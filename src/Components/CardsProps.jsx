import '../Styles/cards.css'

function CardsProps({rasm, nomi, text}) {
  return (
    <div className='cards_props'>
      <img src={rasm} alt="" />
       <h1>{nomi}</h1>
       <p>{text}</p>
    </div>
  )
}

export default CardsProps
