import React, {useState} from 'react'

export default function About() {

  const [myStyle, setMyStyle] = useState(
    {
      backgroundColor : 'white',
      color : 'black',
    }
  
  )

  const [myText, setMyText] = useState(
    'Enable Dark mode!'
  )
      
  const ToggleClick = ()=> {
    if (myStyle.color === 'white'){
      setMyStyle({
        color : 'black',
        backgroundColor : 'white'
      })

    setMyText("Enable Dark Mode!")

    } else {
      setMyStyle({
        color : 'white',
        backgroundColor : 'black',
        border : '1px solid white'
      })

    setMyText("Enable Light Mode!")

    }
  }

  return (
    <div className="container mt-5">
    <div className='container' style={myStyle}>
      <h2 className='mt-2'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Stay Informed with GlobalBrief
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
      <strong>GlobalBrief</strong> Get the latest news from around the world, filtered by category and country, all in one place.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Seamless & Fast Experience
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
      <strong>GlobalBrief</strong> Enjoy a smooth reading experience with quick-loading articles, easy navigation, and real-time updates.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Personalized & Reliable
      </button>
    </h2>
    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      <strong>GlobalBrief</strong> Access trusted news sources, tailored to your interests, with dynamic updates for a better reading experience.
      </div>
    </div>
  </div>
</div>
</div>

<div className="container my-4">
<button type="button" onClick={ToggleClick} className="btn btn-primary">{myText}</button>
</div>

</div>
  )
}
