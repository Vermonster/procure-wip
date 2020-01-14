/* eslint jsx-a11y/anchor-is-valid: 0 */ //disable to support bootstrap link styling

import React, { useState, useEffect } from "react";
import useStoreon from "storeon/react";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Select, { createFilter } from "react-select";
import _ from "lodash";

export default () => {

	//app state
	const {
		uiState, providers, credentials,
		organizations, orgDefaults, redirectUri, dispatch
	 } = useStoreon(
		"uiState", "providers", "credentials",
		"organizations", "orgDefaults", "redirectUri"
	 );

	//component state
	const [provider, setProvider] = useState({});	

	const orgOptions = _.chain(organizations)
		.map( o => ({label: o.name, value: o.orgId || o.fhirEndpoint}) )
		.sortBy( o => o.label )
		.value();

	useEffect( () => {
		if (!provider.id && uiState.id && uiState.mode === "editProvider") {
			const currentProvider = providers.find(p => p.id === uiState.id);
			setProvider(currentProvider)
		}
	}, [uiState.id, uiState.mode, provider.id, providers])

	const handleSubmit = e => {
		e.preventDefault();
		dispatch("providers/upsertAndLoad", provider);
		dispatch("refreshDirty");
	}

	const handleSkip = e => {
		e.preventDefault();
		dispatch("uiState/set", {mode: "review"});
	}

	const handleOrgSelection = (selection) => {
		let orgConfig = organizations.find( 
			o => selection.value === o.orgId || selection.value === o.fhirEndpoint
		);

		const defaults = orgDefaults[orgConfig.defaultId] || {};
		if (orgConfig.defaultId !== undefined) 
			orgConfig = {...defaults, ...orgConfig};

		//get credential details if included by reference
		if (orgConfig.credentialId)
			orgConfig = {...credentials[orgConfig.credentialId], ...orgConfig};

		//update provider with new defaults
		setProvider({
			...orgConfig,
			redirectUri,
			id: provider.id,
			orgId: selection.value,
			queryProfile: orgConfig.queryProfile || "argonaut_spec"
		});
	}

	const renderOrgSelector = () => {

		//workaround since component uses both the value and label to match and we just want to store the value
		const value = provider.orgId ? orgOptions.find(o => o.value === provider.orgId) : null;

		return <Select id="organization" autoFocus
				//performance improvement on autocomplete
				filterOption={createFilter({ignoreAccents: false})}
				value={value}
				onChange={handleOrgSelection}
				isSearchable={true}
				options={orgOptions}
				defaultMenuIsOpen={true}
			/>
	}

	return <div className="p-2">
		<h4 className="mb-4">Select Your Provider</h4>
		<p>
			Choose a healthcare institution where you've received care from the list below.
		</p><p>
			If you've been to multiple healthcare providers, after retrieving your records you'll have the option to return to this screen to select another institution.
		</p>
		{ renderOrgSelector() }

		<div className="d-flex">
			<div className="align-self-end flex-grow-1 mt-4 pl-1">
				{providers.length > 0 && <a href="#" onClick={handleSkip}>skip</a>}
			</div>
			<div>
				<Button color="success" className="mt-4"
					onClick={ handleSubmit } 
					disabled={provider.orgId ? false :true}
				>
					<span className="mr-2">Login to Patient Portal</span>
					<FontAwesomeIcon icon={faChevronRight} className="mr-2" />
				</Button>
			</div>
		</div>

	</div>
}