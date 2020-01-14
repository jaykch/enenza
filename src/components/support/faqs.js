import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Collapse } from "antd"

const { Panel } = Collapse
const questions = [
  {
    id: 1,
    group: "general",
    question: "How do I get in contact with Enenza?",
    answer: "Email us at info@enenza.com or call us on +442039941969.",
  },
  {
    id: 2,
    group: "general",
    question: "Where does Enenza operate?",
    answer: "Our Operators Licence with Transport for London allows us to pick up passengers within Greater London.",
  },
  {
    id: 3,
    group: "general",
    question: "What types of vehicles are used in the Enenza fleet?",
    answer: "We currently have three classes for our vehicles:\n" +
      "- Executive Class (Mercedes E Class, Jaguar XF, or similar)\n" +
      "- Signature Class (Mercedes S Class, or similar)\n" +
      "- Vast Class (Mercedes V Class, or similar)\n",
  },
  {
    id: 4,
    group: "general",
    question: "How many passengers can Enenza vehicles carry?",
    answer: "The number of passengers varies from 4 to 7 depending on vehicle type. Executive Class and Signature Class vehicles can carry up to 4 passengers whereas the Vast Class can carry up to 7 passengers.",
  },
  {
    id: 5,
    group: "general",
    question: "How much luggage can your vehicles carry?",
    answer: "Luggage capacity varies on the vehicle type:\n" +
      "- Executive Class: 2 large suitcases or 4 cabin bags.\n" +
      "- Signature Class: 2 large suitcases or 4 cabin bags.\n" +
      "- Vast Class: 6 large suitcases or 12 cabin bags.\n",
  },
  {
    id: 6,
    group: "bookings",
    question: "Where can I make a booking?",
    answer: "Bookings can be made on our website www.enenza.com or over the phone by calling us on +442039941969.",
  },
  {
    id: 7,
    group: "bookings",
    question: "Can I book a vehicle for the whole day, or per hour? ",
    answer: "Yes we do offer hourly, half day and full day bookings depending on availability. Please note this must be booked in advance to ensure we can get the correct vehicle type made available to you.",
  },
  {
    id: 8,
    group: "bookings",
    question: "How do I make changes to my booking?",
    answer: "Call or email us immediately so that we can assist you.",
  },
  {
    id: 9,
    group: "bookings",
    question: "How do I cancel my booking?",
    answer: "Call or email us immediately so that we can cancel or reschedule the booking.",
  },
  {
    id: 10,
    group: "bookings",
    question: "Is there a cancellation policy?",
    answer: "There is no cancellation charge until up to 2 hours prior to the time of the booking. If a cancellation is made less than 2 hours before the booking, you will be charged a cancellation fee which is 30% of the total booking cost. If you fail to be on time to meet the designated driver at the specified pickup location, a 30% cancellation fee will apply after 30 minutes.",
  },
  {
    id: 11,
    group: "bookings",
    question: "Is there a waiting time charge?",
    answer: "Yes, waiting time charges apply - £0.50 per minute after 5 minutes for standard point-to-point trips, whereas airport pickups you are allowed 15 minutes before incurring the £0.50 per minute waiting time charge.",
  },
  {
    id: 12,
    group: "bookings",
    question: "How can I leave feedback?",
    answer: "You can leave feedback by giving us a review on Google.",
  },
  {
    id: 13,
    group: "bookings",
    question: "How will payments be made?",
    answer: "All payments are made via a secure payment gateway service.",
  },
  {
    id: 14,
    group: "bookings",
    question: "I left an item in one of your vehicles, how can I retrieve it?",
    answer: "Call or email us and we will get in touch with you to help recover your item.",
  },
  {
    id: 15,
    group: "bookings",
    question: "How are the fare prices calculated?",
    answer: "Our booking system calculates the journey utilising the most appropriate route. To get a fare estimate, fill in the pickup and dropoff locations, the date and time of journey, then finally click “get fare”. Tariffs can be found in the vehicle page for hourly/daily bookings. If you require something more bespoke, get in touch to get a quote.",
  },
  {
    id: 16,
    group: "bookings",
    question: "What is your minimum fare?",
    answer: "£10 is our minimum fare on Comfort Class, £18 on Executive Class and £25 on Signature and Vast Class.",
  },
  {
    id: 17,
    group: "billing",
    question: "How do I add or change my card payment details?",
    answer: "When you next complete a booking, just simply log in to your account and in the payments section select “New Card” so you can then enter the new payment details.",
  },
  {
    id: 18,
    group: "billing",
    question: "I can’t delete my saved card details, how do I do this?",
    answer: "Please note that you must have at least one valid payment card saved – so make sure you update your card payment details, so that you can then delete the previously saved card details.",
  },
  {
    id: 19,
    group: "billing",
    question: "When is payment taken?",
    answer: "Payment is taken upon completion of your booked trip. A preauthorisation check is done via Stripe once a booking is made, to ensure that the card registered on your account is valid.",
  },
  {
    id: 20,
    group: "billing",
    question: "Do you give receipts?",
    answer: "A receipt is automatically generated and emailed to you once a payment has been made.",
  },
  {
    id: 21,
    group: "accounts",
    question: "I have forgot my password, how can I reset it?",
    answer: "Click on “Forgot Password” on the login page, and you should receive an email instructing you to reset your password.",
  },
  {
    id: 22,
    group: "accounts",
    question: "Why don’t I ever receive emails from Enenza?",
    answer: "Please check your junk/spam folder and double check that you have entered your email address correctly on your Enenza account.",
  },
  {
    id: 23,
    group: "driver",
    question: "How do I become a driver for Enenza?",
    answer: "Fill in our online form.",
  },
  {
    id: 24,
    group: "driver",
    question: "Is it possible to request a driver?",
    answer: "Yes it is possible to request a preferred driver. You can do this by mentioning your preferred drivers name in the notes section of the booking system, or by calling us on +442039941969.",
  },
  {
    id: 25,
    group: "driver",
    question: "Are your drivers well trained?",
    answer: "Our drivers undergo rigorous training before onboarding with us. This involves briefing them on company protocols, customer safety and security, vehicle maintenance, following road rules and regulations and good practice.",
  },
  {
    id: 26,
    group: "driver",
    question: "Are your drivers insured?",
    answer: "Our drivers are all insured for Private Hire use.",
  },
  {
    id: 27,
    group: "driver",
    question: "Are your drivers licenced?",
    answer: "All of our drivers must have a valid Private Hire Driver’s Licence (PCO Licence) with Transport for London (TfL). This involves passing the following: a criminal records check to obtain a DBS certificate, a medical to confirm that the driver meets the DVLA Group 2 medical standards, an English language assessment and a topographical skills assessment.",
  },
  {
    id: 28,
    group: "driver",
    question: "What’s the minimum age to become a driver?",
    answer: "Drivers must be at least 21 years old with a valid PCO Licence with TfL.",
  },
]

const Faqs = () => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  React.useEffect(() => {
    const results = questions.filter(question =>
      question.question.toLowerCase().includes(searchTerm),
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <section id="support-faqs">
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 8 }} className="search-bar">
            <input type="text" placeholder="I'm looking for" value={searchTerm} onChange={handleChange}/>
          </Col>
          <Col md={12} className="questions">
            <h2>General Enquiries</h2>
            <Collapse bordered={false}>
              {searchResults.map(question => {
                if (question.group === "general") {
                  return <Panel header={question.question} key={question.id}>
                    {question.answer}
                  </Panel>
                }
              })}
            </Collapse>
            <h2>Bookings</h2>
            <Collapse bordered={false}>
              {searchResults.map(question => {
                if (question.group === "bookings") {
                  return <Panel header={question.question} key={question.id}>
                    {question.answer}
                  </Panel>
                }
              })}
            </Collapse>
            <h2>Billings and Payment</h2>
            <Collapse bordered={false}>
              {searchResults.map(question => {
                if (question.group === "billing") {
                  return <Panel header={question.question} key={question.id}>
                    {question.answer}
                  </Panel>
                }
              })}
            </Collapse>
            <h2>Accounts</h2>
            <Collapse bordered={false}>
              {searchResults.map(question => {
                if (question.group === "accounts") {
                  return <Panel header={question.question} key={question.id}>
                    {question.answer}
                  </Panel>
                }
              })}
            </Collapse>
            <h2>Driver help</h2>
            <Collapse bordered={false}>
              {searchResults.map(question => {
                if (question.group === "driver") {
                  return <Panel header={question.question} key={question.id}>
                    {question.answer}
                  </Panel>
                }
              })}
            </Collapse>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Faqs
