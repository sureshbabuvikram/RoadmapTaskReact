import React from 'react'

function Card(props) {
  return    <div class="col-lg-4">
  <div class="card mb-5 mb-lg-0">
    <div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
      <h6 class="card-price text-center">{props.cardData.price}<span class="period">/month</span></h6>
      <hr/>
      <ul class="fa-ul">
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData.user}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData.storage}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
        <li class={props.cardData.project} ><span class="fa-li"><i class={props.cardData.projectIcon} ></i></span>Unlimited
          Private Projects</li>
        <li class={props.cardData.phone}><span class="fa-li"><i class={props.cardData.phoneIcon}></i></span>Dedicated
          Phone Support</li>
        <li class={props.cardData.subDomain}><span class="fa-li"><i class={props.cardData.subDomainIcon}></i></span>{props.cardData.domain}
        </li>
        <li class={props.cardData.monthly}><span class="fa-li"><i class={props.cardData.monthlyIcon}></i></span>Monthly Status
          Reports</li>
      </ul>
      <div class="d-grid">
        <a href="#" class="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Card