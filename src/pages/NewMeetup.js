import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData){
    fetch(
      'https://meetup-8aaa6-default-rtdb.firebaseio.com/meetup.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/')
    })
  }

  return (
    <div>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup = {addMeetupHandler} />
    </div>
  )
}

export default NewMeetup
