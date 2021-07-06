import React ,{ Component} from 'react';
import axios from 'axios';
import Input from '../components/UI/Input';



export default class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserName=this.onChangeUserName.bind(this);
        this.onChangeUsercar_plates=this.onChangeUsercar_plates.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            name:'',
            car_plates:''
        }
    }
    onChangeUserName(e){
        this.setState({name:e.target.value})
    }
    onChangeUsercar_plates(e){
        this.setState({car_plates:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const userObject={
            name:this.state.name,
            car_plates:this.state.car_plates
        };
        axios.post('http://localhost:4000/users/create',userObject)
        .then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        });
        this.setState({name: '',car_plates:''})
    }
    render(){
    return (
        <div className="wrapper">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <Input
                        label="Add Driver Name"
                        placeholder="driver name"
                        value={this.state.name}
                        type="text"
                        onChange={this.onChangeUserName} className="form-control"/>
                    {/* <label>Add Driver Name</label>
                    <input type="text" className="form-control"/> */}
                    </div>

                <div className="form-group">
                <Input
                        label="Add Car_Plates"
                        placeholder="Car_Plates"
                        value={this.state.car_plates}
                        type="text"
                        onChange={this.onChangeUsercar_plates} className="form-control"/>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-success btn-block"/>
                    </div>
            </form>
        </div>

    )
}
}
