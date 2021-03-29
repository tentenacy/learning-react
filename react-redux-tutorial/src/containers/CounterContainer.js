import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import useActions from '../lib/useActions';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const [onIncrease, onDecrease] = useActions(
        [increase, decrease],
        []
    );
    return (
        <Counter
            number={number}
            onIncrease={onIncrease} 
            onDecrease={onDecrease} 
        />
    );
};

export default React.memo(CounterContainer);