import Button from '@mui/material/Button'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';

export default function RecordingsControls(props){

	return(
		<div className="recordings-controls">
			<Button id="record-button" variant="contained" color="success" startIcon={<FiberManualRecordIcon/>}>Record</Button>
			<Button id="upload-button" variant="contained" color="secondary" startIcon={<UploadIcon />}>Upload</Button>
			<Button id="search-button" variant="contained" color="primary" startIcon={<SearchIcon />}>Search</Button>
		</div>
	)
}