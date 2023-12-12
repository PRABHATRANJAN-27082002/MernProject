import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <body>


        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">Pricing</h1>
          <p class="lead">Quickly select an effective pricing table for your potential customers with this components and utilities with little customization.</p>
        </div>

        <div class="container" >
          <div class="card-deck mb-3 text-center" style={{ display: 'flex', flexDirection: 'row', marginLeft: '350px' }}>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Free</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>1 users included</li>
                  <li>Limit 1 minute video call</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">
                  <NavLink to='/signup'>Sign up for free</NavLink>
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Pro</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>2 users included</li>
                  <li>No time limit in video call</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">
                  <NavLink to='/login'>Get started</NavLink>
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>4 users included</li>
                  <li>No time limit in video call</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">
                  <NavLink to='/contact'>Contact us</NavLink>
                </button>
              </div>
            </div>
          </div>


        </div>



      </body>
    </>
  )
}

export default About
