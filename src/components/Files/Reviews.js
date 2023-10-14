import "./reviews.css"
import Header from "./Header"
import reviewImg from "../assets/reviews.png"

const reviews=[
    {comment:"A charming neighborhood coffee shop with friendly baristas and cozy vibes.",
    name:"Emily"
},
{comment:"Great place to kickstart your day with a strong cup of joe.",
name:"Benjamin"},
{
    comment:"This coffee shop's lattes are a work of art!",
    name:"Sophia"
},
{
    comment: "A hidden gem for coffee connoisseurs.",
    name:"Liam"
},
{
    comment:"Perfect spot for a quiet afternoon of reading and sipping.",
    name:"Olivia"
},
{
    comment:"An Instagram-worthy coffee shop with equally photogenic pastries.",
    name:"Jacob"
},
{
    comment:"Coffee shop by day, creative hub by night.",
    name:"Ava"
},
{
    comment:"A reliable go-to for your caffeine fix.",
    name:"William"
},

]

function Reviews(){


    return(
        <div className="ReviewsBody">
          <Header/>
          <div className="contentPart"><h1>What other people are saying!  <img src={reviewImg}></img></h1>
         </div>
         <div className='divCont'> 
            <div className='done'><p>{reviews[0].comment}</p> <span> @{reviews[0].name}</span></div>
            <div className='done'><p>{reviews[1].comment}</p> <span> @{reviews[1].name}</span></div>
            <div className='done'><p>{reviews[2].comment}</p> <span> @{reviews[2].name}</span></div>
            <div className='done'><p>{reviews[3].comment}</p> <span> @{reviews[3].name}</span></div>
         </div>

         <div className='divCont'> 
            <div className='done'><p>{reviews[4].comment}</p> <span> @{reviews[4].name}</span></div>
            <div className='done'><p>{reviews[5].comment}</p> <span> @{reviews[5].name}</span></div>
            <div className='done'><p>{reviews[6].comment}</p> <span> @{reviews[6].name}</span></div>
            <div className='done'><p>{reviews[7].comment}</p> <span> @{reviews[7].name}</span></div>
         </div>
         
        </div>
    )
}
export default Reviews;