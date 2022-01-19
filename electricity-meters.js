// this is our
module.exports = function(pool) {

	// list all the streets the we have on records
	async function streets() {
		const streets = await pool.query(`select * from street`);
		return streets.rows;
	}

	// for a given street show all the meters and their balances
	function streetMeters(streetId) {

	}

	// return all the appliances
	function appliances() {

	}

	// increase the meter balance for the meterId supplied
	function topupElectricity(meterId, units) {

	}
	
	// return the data for a given balance
	function meterData(meterId) {
	
	}

	// decrease the meter balance for the meterId supplied
	function useElectricity(meterId, units) {
	
	}

	return {
		streets,
		streetMeters,
		appliances,
		topupElectricity,
		meterData,
		useElectricity
	}


}