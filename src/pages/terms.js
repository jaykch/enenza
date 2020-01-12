import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"

const Terms = () => {
  return (
    <Layout>
      <SEO title="Services"/>
      <section id="terms">
        <Container>
          <Row>
            <Col md={12}>
              <h1>Terms and Conditions</h1>
              <h2>Definitions</h2>
              <ul>
                <li><strong>Booking</strong> means a booking made by a customer in order to receive services provided by
                  Enenza Limited.
                </li>
                <li><strong>Cancellation</strong> Fee means an amount that customers are required to pay in accordance
                  to the terms
                  mentioned in 3.2 and 3.3 respectively.
                </li>
                <li><strong>Customer </strong>means either an individual(s), company or firm that makes a booking.</li>
                <li><strong>Driver</strong> means an individual who drives a vehicle for Enenza L imited.</li>
                <li><strong>Drop-off </strong>means the location agreed for where drivers will drop customers at the end
                  of the booking.
                </li>
                <li><strong>DVLA</strong> means the Drivers Vehicle and Licensing Agency.</li>
                <li><strong>Enenza </strong>means Enenza Limited, a private limited company registered in England with
                  company number: 11119336 and registered office: Suite 9, 480 Larkshall Road, London, London, E4 9HH.
                </li>
                <li><strong>Pickup</strong> means the location agreed for where drivers will collect customers at the
                  agreed time of a booking.
                </li>
                <li><strong>TFL</strong> means Transport for London.</li>
                <li><strong>Vehicles</strong> mean any mode of transport provided by Enenza Limited.</li>
                <li><strong>Waiting Time Charges</strong>mean a fee the customer must pay for every minute spent waiting
                  for the customer at the specified location, after the booking start time.
                </li>
              </ul>
              <h2>Payments</h2>
              <ul>
                <li>Customers must make full payment of a booking before a driver is assigned. Please note that if
                  payment has not been received, the job becomes nullified.
                </li>
                <li>Enenza are under no obligation to provide a service if a late payment is received and no
                  drivers are available to take the booking.
                </li>
                <li>If payments are made by credit or debit card, the credit/debit card statement will show the charge
                  as “Enenza Limited”.
                </li>
                <li>The same applies for PayPal payments as mentioned in 2.3</li>
                <li>If a booking involves collections, waypoints or drop-offs that weren’t requested in advance, the
                  customer will be charged for the extra miles incurred based on our calculation fees.
                </li>
                <li>Please note that Enenza have the right to refuse these extra collections, waypoints or drop-offs as
                  mentioned in 2.5 so that subsequent booking timings won’t be affected.
                </li>
              </ul>
              <h2>Cancellations</h2>
              <ul>
                <li>Should a customer decide to cancel a booking, they must inform Enenza soon as possible to avoid any
                  fees.
                </li>
                <li>If any bookings are cancelled within 2 hours of the booking starting time, a 30% cancellation fee of
                  the total booking cost will apply.
                </li>
                <li>If a customer fails to be on time to meet the designated driver at the specified pickup location, a
                  30% cancellation fee will apply after 30 minutes.
                </li>
                <li>Customers are allowed 5 minutes free waiting time for standard bookings. After that, a waiting time
                  charge of £0.50 per minute will then apply, whereas for airport pickups customers are allowed 15
                  minutes free waiting time before incurring the £0.50 per minute charge.
                </li>
                <li>n the event that a driver is more than 5 minutes late to a booking, customers are entitled to cancel
                  the booking without being charged a cancellation fee.
                </li>
              </ul>
              <h2>Damages</h2>
              <ul>
                <li>Customers are liable for any damages or mess caused to vehicle(s) if at fault.</li>
                <li>In accordance with 4.1, customers will be charged for the cost of repairs or valet services needed
                  to restore the vehicle(s) to the condition prior to the booking.
                </li>
              </ul>
              <h2>Drivers</h2>
              <ul>
                <li>Drivers must abide by all UK laws and conform with DVLA and TfL rules and regulations. If any
                  driver is found to be in breach of any of these conditions, their contract will be terminated with
                  immediate effect.
                </li>
                <li>Drivers must always drive safely in accordance with speed limits and road traffic laws.</li>
                <li>Vehicles are under the driver’s responsibility at all times.</li>
                <li>Drivers must at all times use the most efficient route in relation to current road traffic
                  conditions, or customers preferred route if appropriate.
                </li>
                <li>The driver is entitled to refuse customers to enter the vehicle if they are believed to be
                  under the influence of alcohol or drugs and/or if their actions pose a threat to the driver, other
                  customers or the vehicle.
                </li>
              </ul>
              <h2>Lost Property</h2>
              <ul>
                <li>Customers must notify Enenza immediately if they believe to have misplaced any items throughout
                  their booking.
                </li>
                <li>All lost property will be kept safe and recorded in reference to the booking details on file.</li>
                <li>Enenza keep lost property for a minimum of 12 months.</li>
              </ul>
              <h2>Complaints</h2>
              <ul>
                <li>Complaints can be made via email: info@enenza.com, online on www.enenza.com or by telephone
                  02039941969.
                </li>
                <li>All complaints will be investigated, and course of action will be taken as necessary.</li>
              </ul>
              <p>Enenza will aim to arrive at the requested pickup location 15 minutes prior to the pickup time.
                However, Enenza are not responsible for any delays that occur due to situations out of our control.
                Examples include traffic, road accidents, mechanical failures or extreme weather conditions. Enenza do
                not accept responsibility for any losses caused by these events.</p>
              <p>Enenza have the right to end a booking due to unsatisfactory behaviour made by any customer. In
                these cases, customers will still be charged for the full cost of the booking whether or not the journey
                has commenced. If any of these events occur, Enenza will not hesitate to prohibit this individual from
                using our services again.</p>
              <p>Enenza keep booking records for a minimum of 12 months.</p>
              <p>Enenza reserve the right to make changes to a vehicle or driver before a booking commences.</p>
              <p>Enenza may provide customers with subcontracted vehicles. </p>
              <p>Enenza reserve the right to make changes to these terms and conditions when required without any prior
                notice.</p>
              <p>The customer’s statutory rights are not affected by anything stated in these terms and conditions.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default Terms
