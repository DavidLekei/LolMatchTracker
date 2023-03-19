import React, {Component} from 'react';

class ListviewHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const columns = this.props.columns?.map((id, index) => {
            return <td className="lv-header-column lv-item">{this.props.columns[index]}</td>
        })

        return(
            <div className={`lv-row lv-header-row`}>
                {columns}
            </div>
        )
    }

}

export default ListviewHeader;