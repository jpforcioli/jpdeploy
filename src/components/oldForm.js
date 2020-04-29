import React from "react";
import useDeployForm from "./CustomHooks";

import "../styles/form.css"

const Form = () => {

	const handleSubmit = () => {
		console.log(values);
	}

	return (
		<div className="Form" >
			<form onSubmit={handleSubmit}>
				<ul className="flex-outer">
					<li>
						<label htmlFor="site_id">Site ID</label>
						<input
							name="site_id"
							type="text"
							onChange={handleChange}
							value={values.site_id}
							required
						/>
					</li>
					<li>
						<label htmlFor="fortigate_sn">FortiGate SN</label>
						<input
							name="fortigate_sn"
							type="text"
							onChange={handleChange}
							value={values.fortigate_sn}
							required
						/>
					</li>
					<li>
						<label htmlFor="fortiswitch_sn">FortiSwitch SN</label>
						<input
							name="fortiswitch_sn"
							type="text"
							onChange={handleChange}
							value={values.fortiswitch_sn}
							required
						/>
					</li>
					<li>
						<button>DEPLOY</button>
					</li>
				</ul>
			</form>
		</div >
	)
}

export default Form;
