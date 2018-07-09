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
			<p className="aboutText">
				<h4 className="aboutText">DHIS2</h4>The District Health Information
				Software 2 is an open source software platform allowing governments and
				organizations to collect, manage and analyze data in health domain and
				beyond it. It is currently deployed by the Ministry to manage routine
				reporting data, for monitored indicators from facilities in KENYA
			</p>
			<p className="aboutText">
				<h4 className="aboutText">KEMSA ERP</h4>The Kenya Medical Supplies
				Agency is a specialized government medical logistics provider for
				Ministries of Medical Service/ Public Health-supported health facilities
				and programs in Kenya. This system provides logistical data on product
				distribution to health facilities in Kenya.
			</p>
			<p className="aboutText">
				<h4 className="aboutText">KMHFL</h4>The Kenya Master Health Facility
				List (KMFL) is an application with all health facilities and Community
				units in KENYA. Each facility and community unit is identified with a
				unique code and their details describing their geographical locaiton,
				administrative location, ownership, type and services offered.
			</p>
			<p className="aboutText">
				<h4 className="aboutText">IHRIS</h4>IHRIS is a human resource management
				tool that enables organizations to design and manage a comprehensive
				human resource strategy. While primarily intended to manage health care
				workers, IHRIS may be readily adopted to other types of personnel. IHRIS
				is free and open source, supported by the HRH Kenya Mechanism, an
				innovative global innitiative to help developing countries build and
				sustain their health workforce.
			</p>
		</div>
	</div>
)
export default About
