export default function validate(values) {
	let errors = {};

	if (!values.site_id) {
		errors.site_id = 'The Site ID is required';
	} else if (!/^[0-9]*$/.test(values.site_id)) {
		errors.site_id = 'The Site ID has to be only numbers';
	}

	if (!values.fortigate_sn) {
		errors.fortigate_sn = 'The FortiGate SN is required';
	} else if (!/^[A-Z0-9]{16}/.test(values.fortigate_sn)) {
		errors.fortigate_sn = 'The FortiGate SN has to be 16 digits long';
	}

	if (!values.fortiswitch_sn) {
		errors.fortiswitch_sn = 'The FortiSwitch SN is required';
	} else if (!/^[A-Z0-9]{16}/.test(values.fortiswitch_sn)) {
		errors.fortiswitch_sn = 'The FortiSwitch SN has to be 16 digits long';
	}

	return errors;
}


