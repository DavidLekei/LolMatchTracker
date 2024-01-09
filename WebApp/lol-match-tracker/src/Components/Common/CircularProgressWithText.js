import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularProgressWithText(props) {
    return (
      <div className="column jc">
        <h2>{props.label}</h2>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress {...props} style={props.style} variant="determinate" value={props.fill} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              <span className="column circular-text">
                {props.value != 'undefined' ? props.value : ''}
              </span>
            </Typography>
          </Box>
        </Box>
      </div>
    );
  }