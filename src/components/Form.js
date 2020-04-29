import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LazyLog, ScrollFollow } from 'react-lazylog';

import useForm from "../lib/useForm"
import validate from "./FormValidationRules";

const Form = () => {
	const { values, errors, resetForm, handleChange, handleSubmit } = useForm(deploy, validate);
	const [terminalIsOn, setTerminalIsOn] = useState(false);

	function deploy() {
		fetch(`/deploy/?site_id=${values.site_id}&fortigate_sn=${values.fortigate_sn}&fortiswitch_sn=${values.fortiswitch_sn}`);
		setTerminalIsOn(true);
	}

	return (
		<section className="hero is-fullheight has-bg-img">
			<div className="hero-body blur">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-5-tablet is-4-desktop is-4-widescreen">
							<div className="box">
								<h1 className="title has-text-centered">Deployment Tool</h1>
								<form onSubmit={handleSubmit}>
									<div className="field">
										<label className="label">Site ID</label>
										<div className="control has-icons-left">
											<input
												className={`input ${errors.site_id && `is-danger`}`}
												type="text" name="site_id"
												onChange={handleChange}
												value={values.site_id || ''}
											/>
											<span className="icon is-small is-left">
												<FontAwesomeIcon icon="globe" />
											</span>
											{errors.site_id && (
												<p className="help is-danger">{errors.site_id}</p>
											)}
										</div>
									</div>
									<div className="field">
										<label className="label">FortiGate SN</label>
										<div className="control has-icons-left">
											<input
												className={`input ${errors.fortigate_sn && `is-danger`}`}
												type="text"
												name="fortigate_sn"
												onChange={handleChange}
												value={values.fortigate_sn || ''}
											/>
											<span className="icon is-small is-left">
												<FontAwesomeIcon icon="shield-alt" />
											</span>
											{errors.fortigate_sn && (
												<p className="help is-danger">{errors.fortigate_sn}</p>
											)}
										</div>
									</div>
									<div className="field">
										<label className="label">FortiSwitch SN</label>
										<div className="control has-icons-left">
											<input
												className={`input ${errors.fortiswitch_sn && `is-danger`}`}
												type="text"
												name="fortiswitch_sn"
												onChange={handleChange}
												value={values.fortiswitch_sn || ''}
											/>
											<span className="icon is-small is-left">
												<FontAwesomeIcon icon="random" />
											</span>
											{errors.fortiswitch_sn && (
												<p className="help is-danger">{errors.fortiswitch_sn}</p>
											)}
										</div>
									</div>
									<p className="field is-grouped">
										{values.site_id && values.fortigate_sn && values.fortiswitch_sn ? (
											<button type="submit" className="control button is-block is-info is-expanded has-text-centered">DEPLOY</button>
										) : (<button type="submit" className="control button is-block is-info is-expanded has-text-centered" disabled>DEPLOY</button>)}
										<button type="reset" className="button is-danger is-outlined" onClick={() => resetForm()}>
											<span className="icon is-small">
												<FontAwesomeIcon icon="trash-alt" />
											</span>
										</button>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{terminalIsOn && (
				<div className="modal is-active">
					<div className="modal-background"></div>
					<div className="modal-content container">
						<ScrollFollow
							startFollowing={true}
							render={({ follow, onScroll }) => (
								<LazyLog url={`/deploy/?site_id=${values.site_id}&fortigate_sn=${values.fortigate_sn}&fortiswitch_sn=${values.fortiswitch_sn}`} stream follow={follow} onScroll={onScroll} />
							)}
						/>
					</div>
					<button className="modal-close is-large" aria-label="close"
						onClick={() => {
							setTerminalIsOn(false);
							resetForm();
						}}></button>
				</div>
			)}
		</section >
	)
}

export default Form;
