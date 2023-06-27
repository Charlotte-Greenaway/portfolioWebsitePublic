import React from 'react';
import './css/AboutMe.css';
import ResumeItem from '../components/resumeItem';



const Resume = ({ ScreenWidth }) => {



  return (
    <main  className={ScreenWidth === 'active' ? 'half' : 'full'} id="resume">
     <h1>Resume</h1>
    
      <ResumeItem section={["page-1","#","#page-2"]} title="Tech Ops Exec" dates="FEB 2023 - CURRENT" info="In my current role, I test and troubleshoot the delivery of ads on a page- I create solutions to ensure ads are serving correctly.I also work on the integration and creation of ad code on websites, utilising my knowledge of JavaScript to do so. Additionally, I use my skills in Node.js to create APIs in relation to google ad manager to streamline usually long tasks and work more efficiently. With this, I am developing a user-friendly front end so that my colleagues are able to use the application as well.I also have experience building ad templates for google ad manager, such as skin, interstitial and sticky footer templates."/>
     
      <ResumeItem section={["page-2","#page-1", "#page-3"]} title="Veterinary Assistant" dates="APR 2022 - SEPT 2022" info="Supported and assisted staff such as nurses and vets, often assisting with technical issues and troubleshooting problems with equipment. Performing tests on samples in a lab, maintaining a clear and clean workspace and assisting with the sorting and checking of medical equipment."/>

      <ResumeItem section={["page-3","#page-2","#"]} title="Accounts Assistant" dates="NOV 2021 - APR 2022" info="Verified items billed against items received, following up with vendors to reconcile variances.Produced accurate general ledger entries with Autoline.Input sales, purchase and cash transactions.Prepared Excel spreadsheets to track banking transactions and financial performance.Reconciled all company accounts, including credit cards and expenses.Met deadlines by managing workload independently."/>
     
    </main>
  );
};

export default Resume;
