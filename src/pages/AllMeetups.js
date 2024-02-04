import { useState, useEffect } from 'react'
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isloading, setIsLoading] = useState(true)
  const [meetupData, setMeetupData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://meetup-8aaa6-default-rtdb.firebaseio.com/meetup.json'
    ).then(response => {
      return response.json()
    })
    .then(data => {
      const meetups = [];

      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup)
      }

      setIsLoading(false)
      setMeetupData(meetups)
    })
  }, [])

  if(isloading){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups = {meetupData} />
    </div>
  )
}

export default AllMeetups
