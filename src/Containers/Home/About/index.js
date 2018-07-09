import React from "react"

import "./style.css"
const About = () => (
	<div className="aboutContainer">
		<div className="container segment backgroundGrey">
		<br />
		<br />
			<h1 className="welcomeBannerPrimaryText">About DSL</h1>
			<p className="aboutText">
				The Ministry of Health (MOH) has made considerable investments in health
				information systems. These include the DHIS2- for routine reporting. The
				KMHFL - A registry for all health facilities and their services. The
				Service Desk- a user support platform. IHRIS- a system for health work
				personnel information. LMIS- a commodities logistics system. KEMSA ERP-
				an enterprise wide system for commodity procurement and supply chain
				management, etc. All these system have a unique utilization within the
				health sector.
			</p>

			<br />
			<p className="aboutText">
				To enable the use of data from the vaious systems, the Ministry of
				Health developed the Data Service Layer (DSL). This is a data warehouse
				platform. The expected benefits of this system include a simple use
				platform for data access, data visualizations, the provision of critical
				use of data for insights and foresight so as to enhance decision making,
				program improvment, continuous quality improvement and resource
				allocation.
			</p>
		</div>

		<br />
		<br />
		<div className="container segment backgroundWhite">
			<h1 className="welcomeBannerPrimaryText">DSL Services</h1>
			<p className="aboutText">
				DSL can be said to be a tool that provides a unified view of disparate
				systems. Now that the DSL is in place, there are opportunities to
				develop data analytics and data mining innovators and thus enhancing the
				use of health data.
			</p>
			<p className="aboutText">
				The DSL has in place modules that are being refined to support data
				analytics and data mining. The modules will be customized on DSL to
				targeted capabilities and capacities in data analytics. These would
				include simple analytics tools such as MS Excel and pre-populated
				reports for entry level users to complex analytics using advanced
				analytics tools such as MS power B.I, R or tableau.
			</p>
		</div>

		<br />
		<br />
		<div className="container segment backgroundGrey">
			<br />
			<h1 className="welcomeBannerPrimaryText">Data Sets</h1>			
		</div>
	</div>
)
export default About
