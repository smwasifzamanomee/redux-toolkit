import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './CounterSlice'

const CounterView = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    // console.log(count)
    return (
        <div>
            Count : {count}
            <div className='flex gap-4 justify-center items-center mt-4'>
                <button
                    onClick={
                        () => {
                            dispatch(increment())
                        }
                    }
                    className='border bg-green-500 p-2 rounded-lg'>Increment</button>
                <button
                    onClick={
                        () => {
                            dispatch(reset())
                        }
                    }
                 className='border bg-blue-500 p-2 rounded-lg'>Reset</button>
                <button 
                    onClick={
                        () => {
                            dispatch(decrement())
                        }
                    }
                className='border bg-red-500 p-2 rounded-lg'>Decrement</button>
                <button
                    onClick={
                        () => {
                            dispatch(incrementByAmount(5))
                        }
                    }
                    className='border bg-yellow-500 p-2 rounded-lg'>Increment by 5</button>

            </div>
        </div>
    )
}

export default CounterView