import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch} from "react-redux";
import { increase, decrease} from "../module/counter";

const CounterContainers = () => {
    const number = useSelector((state)=> state.counter);

    const dispatch = useDispatch();

    const onlncrease = () => {
        dispatch(increase());
    };
    const onDecrease = () => {
        dispatch(decrease());
    };
    return (
        <Counter
        number = {number}
        onlncrease={onlncrease}
        onDecrease={onDecrease}
        ></Counter>
    )
}
export default CounterContainers;