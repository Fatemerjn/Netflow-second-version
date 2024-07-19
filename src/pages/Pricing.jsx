import React from 'react';
import '../styles/Login.scss';
import '../styles/Pricing.scss';
import Table from '../components/Table';
import PricingBox from '../components/PricingBox';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div>
      <div className="section-1">
        <div className="sub-section left">
          <div
            className="title"
            style={{ marginLeft: '60px', textAlign: 'inherit' }}
          >
            <h1 className="gabby">Pricing</h1>
          </div>
          <div className="sub-title">
            We believe in flexibility and value for everyone. Explore our
            pricing options and find the perfect fit for your needs.
          </div>
        </div>
        <div className="sub-section right">Image Here</div>
      </div>
      <div className="container">
        <div className="pricing-type">
          <PricingBox
            ptitle="Basic"
            price="free trial"
            content="Access to selected AI modules Limited network configurations to community support"
          />
          <PricingBox
            ptitle="Premium"
            price="000$"
            content="Unlock the full power of NetFlowAI Get unlimited access to all AI modules create complex networks Unlimited network configurations Priority customer support Access to new features and updates."
          />
          <PricingBox
            ptitle="Enterprise"
            price="000$"
            content="Customized AI solutions Dedicated customer support Advanced network configurations Access to new features and updates"
          />
        </div>
        <div className="pic-pricing-type">
          <p>image here</p>
        </div>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
        }}
      >
        <div
          style={{
            width: '889px',
            height: '87px',
            top: '937px',
            left: '147px',
            fontFamily: 'Gabriela',
            fontSize: '32px',
            fontWeight: '400',
            lineHeight: '41px',
            letterSpacing: '0.22em',
            textAlign: 'left',
            color: 'whitesmoke',
            marginTop: '50px',
          }}
        >
          Choose Your Plan ,Unlock Your Potential
        </div>
      </div>
      <div class="table-container">
        <div class="table">
          <div class="sub-title">
            "Our AI platform's Service Usage Cost Table details the cost for
            each service. Every use deducts the listed amount from your account,
            ensuring transparent and predictable charges."
          </div>
        </div>

        <Table />
      </div>
      <br />
    </div>
  );
};

export default Pricing;
