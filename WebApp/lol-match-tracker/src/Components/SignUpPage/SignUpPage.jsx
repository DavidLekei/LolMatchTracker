import RegisterForm from './RegisterForm'

export default function SignUpPage(props){
	return(
		<div style={{height:'100%', display:'flex', alignItems:'center', paddingLeft:'45rem', paddingRight:'45rem'}}>
			<div style={{width:'100%'}}>
				<h1>Sign up for tracker.io</h1>
				<RegisterForm />
			</div>
		</div>
	)
}