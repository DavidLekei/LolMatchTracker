import styles from './splash.module.css'

function FadeText(props){
	return(
		<div id={styles.fadeText} style={{position:'absolute', right:'46%', display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', zIndex:'1501'}}>
			<h1>{props.text}</h1>
		</div>
	)
}

function Underneath(props){
	return(
		<div className={`${styles.fullscreen} ${styles.test}`}>
			{props.children}
		</div>
	)
}

function Line(props){

	return(
		<div id={styles.lineWrapper} className={`${styles.fullscreen}`}>
			<div id="line" className={`${styles.line} ${props.thick ? styles.thickLine : styles.thinLine}`}>
			</div>
		</div>
	)
}

export default function Splash(props){
	return(
		<div id={styles.splash} className={`${styles.fullscreen} ${styles.contentCentered}`}>
			<Line />
			<FadeText text={props.fadeText} />
			<Underneath> {props.children} </Underneath>
		</div>
	)
}