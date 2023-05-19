import styles from './jobs.module.scss';
import Navigation from "../../components/Navigation/navigation";

import { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Jobs = () => {

    const statusLegend = ["Progressing", "Reject", "Offer"]

    const legendItems = () => {
        return statusLegend.map((item, index) => (
            <div id={`status${index}`} className={styles.legendItem + " " + (item==="Progressing"?styles.legendColorProgress:item==="Reject"?styles.legendColorReject:styles.legendColorOffer)}>
                {item}
            </div>
        ))
    }

    const jobsSample = [
        {
            JobID:0,
            Date:"04/25/2023",
            Category:"SWE",
            Company:"Techie inc",
            Location:"Davis, CA",
            Status:"Sent",
            Title:"Junior Software Engineer",
            Type:"Full Time",
            URL:"https://www.google.com/"
        },
        {
            JobID:1,
            Date:"03/14/2023",
            Category:"SDET",
            Company:"Hip Sofwares",
            Location:"Boston, MA",
            Status:"Interviewing",
            Title:"Entry Level Automation Test Engineer",
            Type:"Full Time",
            URL:"https://www.google.com/"
        },
        {
            JobID:1,
            Date:"03/14/2023",
            Category:"SDET",
            Company:"Hip Sofwares",
            Location:"Boston, MA",
            Status:"Reject",
            Title:"Entry Level Automation Test Engineer",
            Type:"Full Time",
            URL:"https://www.google.com/"
        },
        {
            JobID:1,
            Date:"03/14/2023",
            Category:"SDET",
            Company:"Hip Sofwares",
            Location:"Boston, MA",
            Status:"Interviewing",
            Title:"Entry Level Automation Test Engineer",
            Type:"Full Time",
            URL:"https://www.google.com/"
        },
        {
            JobID:1,
            Date:"03/14/2023",
            Category:"SDET",
            Company:"Hip Sofwares",
            Location:"Boston, MA",
            Status:"Interviewing",
            Title:"Entry Level Automation Test Engineer",
            Type:"Full Time",
            URL:"https://www.google.com/"
        }
    ]

    const [myJobs, setMyJobs] = useState(jobsSample)

    const jobsContainer = () => {
        return myJobs.map((item) => (
            <div id={`job${item.JobID}`} className={styles.jobContainer}>
                <a href={item.URL} target="_blank" className={styles.jobTitle + " " + (item.Status==="Offer"?styles.legendColorOffer:item.Status==="Reject"?styles.legendColorReject:styles.legendColorProgress)} data-tooltip-id="status-tip" data-tooltip-content="Visit">{item.Title}</a>
                <ReactTooltip id="status-tip" />
                <p className={styles.jobInfo}>{item.Company}</p>
                <p className={styles.jobInfo}>{item.Type} @ {item.Location}</p>
                <p className={styles.jobInfo} style={{marginBottom:'20px'}}>{item.Date}</p>
                <div className={styles.buttonContainer}>
                    <a href='/' className={styles.statusButton}>Change Status</a>
                </div>
            </div>
        ))
    }

    return (
        <div className={styles.jobsContainer}>
            <Navigation></Navigation>
            
            <h1 className={styles.pageTitle}>My Applications</h1>

            <h2 className={styles.legendTitle}>Legend</h2>
            <div className={styles.legendContainer}>{legendItems()}</div>

            <h1 className={styles.warning}>This page is currently under progress</h1>

            <div className={styles.jobsGrid}>
                {jobsContainer()}
            </div>
        </div>
    )
}

export default Jobs;