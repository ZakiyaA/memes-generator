import React , {useState, useEffect} from 'react';

const Mems = () => {
  
    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemeImages, setAllMemeImages] = useState([])
  
  const randomImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    setMeme(prev => {
        return { ...prev, 
        randomImage: allMemeImages[randomNumber].url}  
    })    
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
}, [])
 
  return (
    <main className='container'>
        <div className='form'> 
        <input  
          className='memo' 
          type='text' 
          placeholder='First Part'
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          />
        <input  
          className='memo' 
          type='text' 
          placeholder='Second Part'
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />  
        
        <button type='submit' onClick={randomImage} className='submit'>Get a new meme image</button>
    </div> 
    <div className='memo-image'>
    <img  src={meme.randomImage} alt='memo-background' />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
    </main>
  )
}

export default Mems