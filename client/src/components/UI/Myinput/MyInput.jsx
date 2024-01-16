import classes from './styles.module.css'

export default function(props){

    const {getDataByName, getErrorByName} = props.bindData !== undefined ? props.bindData : {}
    let err = null
    if(getErrorByName && getErrorByName(props.name)) err = getErrorByName(props.name)
    return(
        <div>
            {props.label && <label>{props.label}</label>}
             <input style={{width:'100%', marginBottom: '15px'}}
                ref={ getDataByName ? getDataByName(props.name) : undefined} 
                type={props.type} 
                placeholder={props.placeholder}
            />
            {err && <div className={classes.field__error}>{err} </div> }
        </div>
    )
}