import { Switch } from "react-native";
const CustomSwitch = ({active,toggleSwitch}) =>{
    return(
        <Switch
            onValueChange={toggleSwitch}
            value={active}
            trackColor={{false: '#A4A4A4', true: '#A4A4A4'}}
            thumbColor={active ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#A4A4A4"
        >
        </Switch>
    )
}

export default CustomSwitch