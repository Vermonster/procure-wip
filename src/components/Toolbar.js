import React, {useState} from "react";
import {Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import useStoreon from "storeon/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTable, faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default () => {

	const { 
		providers, spreadsheetTemplates,
		nonModalUi, dispatch 
	} = useStoreon(
		"providers", "spreadsheetTemplates", "nonModalUi"
	);
	
	const [showSpreadsheetOptions, setShowSpreadsheetOptions] = useState(false);

	const handleExportData = (e) => {		
		e.preventDefault();
		dispatch("export/downloadAll", {mode: "editProvider"});
	}

	const handleShowGithubExport = (e) => {
		e.preventDefault()
		dispatch("uiState/set", {mode: "githubExport"});
	}

	const handelExportSpreadsheet = (templateId, format, e) => {
		e.preventDefault()
		dispatch("export/spreadsheet", {templateId, format});
	}

	const resourceCount = providers.find(p => p.data && p.data.entry.length);
	
	const renderSpreadsheetExport = () => {
		if (!Object.keys(spreadsheetTemplates||{}).length) 
			return null;
		let menuItems = [];
		Object.keys(spreadsheetTemplates).forEach( templateId => {
			menuItems.push(
				<DropdownItem 
					key={templateId + "-xlsx"} 
					onClick={handelExportSpreadsheet.bind(this, templateId, "xlsx")}
				>
					{spreadsheetTemplates[templateId].name + " (Excel)"}
				</DropdownItem>,
				<DropdownItem 
					key={templateId + "-csv"}
					onClick={handelExportSpreadsheet.bind(this, templateId, "csv")}
				>
					{spreadsheetTemplates[templateId].name + " (CSV)"}
				</DropdownItem>
			)
		});
		return <Dropdown 
			style={{display: "inline",}}
			disabled={nonModalUi.isExportingSheet}
			isOpen={showSpreadsheetOptions}
			toggle={e => setShowSpreadsheetOptions(!showSpreadsheetOptions)}
		>
			<DropdownToggle 
				color="outline-secondary" 
				style={{margin: "0 1rem 1rem 0"}}
				caret
			>
				<FontAwesomeIcon icon={faTable} className="mr-2" />
				<span className="mr-2">Export as Spreadsheet</span>
			</DropdownToggle>
			<DropdownMenu>{menuItems}</DropdownMenu>
		</Dropdown>
	}

	const downloadAllButton = <Button 
		color="outline-secondary"
		style={{margin: "0 1rem 1rem 0"}}
		onClick={handleExportData}
		disabled={nonModalUi.isDownloading}
		>
			<FontAwesomeIcon icon={faFileDownload} className="mr-2" />
			Download Data
	</Button>;

	const ghExportButton = <Button 
		style={{margin: "0 0 1rem 0"}}
		color="outline-secondary"
		onClick={handleShowGithubExport}
		>
		<FontAwesomeIcon icon={faGithub} className="mr-2" />
		Upload to Github
	</Button>;

	return <div style={{marginBottom: ".5rem"}}>
		{resourceCount && downloadAllButton}
		{resourceCount && renderSpreadsheetExport()}
		{resourceCount && ghExportButton}
	</div>

}